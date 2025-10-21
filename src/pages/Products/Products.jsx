import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import PaginationComponent from "../../components/pagination/Pagination.jsx";
import PopUp from "../../components/pop-up/PopUp.jsx";
import {
  Page, Section, Title, Subtitle, Grid, EmptyMsg, Aside, AsideContainer,
  TitleContainer, Border, Select
} from "./Products.style.js";

const CATEGORY_UI_TO_DB = {
  BOLSASEMOCHILAS: ["Bolsas e mochilas"],
  CANECAS: ["Canecas"],
  COPOSTERMICOS: ["Copos térmicos"],
  BONES: ["Bonés"],
  CAMISETAS: ["Camisetas"],
  GARRAFAS: ["Garrafas"],
  KITS: ["Kits"],
  CADERNOS: ["Cadernos"],
  CHAVEIROS: ["Chaveiro", "Chaveiros"],
  ELETRONICOSEACESSORIOS: ["Eletrônicos e Acessórios"],
};

const CATEGORY_DB_TO_UI = Object.entries(CATEGORY_UI_TO_DB)
  .flatMap(([uiKey, labels]) => labels.map((label) => [label, uiKey]))
  .reduce((acc, [label, uiKey]) => { acc[label] = uiKey; return acc; }, {});

const initialCategorias = [
  { key: "BOLSASEMOCHILAS", label: "Bolsas e mochilas", count: 0 },
  { key: "CANECAS", label: "Canecas", count: 0 },
  { key: "COPOSTERMICOS", label: "Copos térmicos", count: 0 },
  { key: "BONES", label: "Bonés", count: 0 },
  { key: "CAMISETAS", label: "Camisetas", count: 0 },
  { key: "GARRAFAS", label: "Garrafas", count: 0 },
  { key: "KITS", label: "Kits", count: 0 },
  { key: "CADERNOS", label: "Cadernos", count: 0 },
  { key: "CHAVEIROS", label: "Chaveiros", count: 0 },
  { key: "ELETRONICOSEACESSORIOS", label: "Eletrônicos e Acessórios", count: 0 },
];

const options = [
  { value: "relevantes", label: "Mais relevantes" },
  { value: "nome-az", label: "Nome A-Z" },
  { value: "lancamentos", label: "Lançamentos" },
];

export default function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [categoriasSel, setCategoriasSel] = useState([]); 
  const [categorias, setCategorias] = useState(initialCategorias);
  const [selectValue, setSelectValue] = useState("relevantes");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
  const PER_PAGE = 12;

  const sortMap = {
    relevantes: { sortBy: "created_at", sortDir: "DESC" },
    "nome-az": { sortBy: "name", sortDir: "ASC" },
    lancamentos: { sortBy: "created_at", sortDir: "DESC" },
  };

  const buildImageUrl = (imgPath) => {
    if (!imgPath) return undefined;
    let p = String(imgPath).trim();
    if (/^https?:\/\//i.test(p)) return p;
    p = p.replace(/\\/g, "/").replace(/^\/+/, "");
    p = p.replace(/^uploads\/+uploads\//, "uploads/");
    if (p.startsWith("uploads/")) {
      // ok
    } else if (p.startsWith("images/")) {
      p = `uploads/${p}`;
    } else {
      p = `uploads/images/${p}`;
    }
    return `${API_URL}/${p}`;
  };

  const applySort = (arr) => {
    const { sortBy, sortDir } = sortMap[selectValue] ?? sortMap.relevantes;
    const dir = sortDir === "ASC" ? 1 : -1;
    const getVal = (o) => o?.[sortBy];
    return [...arr].sort((a, b) => {
      const av = getVal(a), bv = getVal(b);
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === "string" && typeof bv === "string") {
        return av.localeCompare(bv) * dir;
      }
      return (av > bv ? 1 : av < bv ? -1 : 0) * dir;
    });
  };

  const fetchAll = async (signal) => {
    const res = await fetch(`${API_URL}/produtos?perPage=9999`, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return Array.isArray(json) ? json : json?.data || [];
  };

  const updateCounts = (allProducts) => {
    const byUI = allProducts.reduce((acc, p) => {
      const uiKey = CATEGORY_DB_TO_UI[p.category] || p.category;
      acc[uiKey] = (acc[uiKey] || 0) + 1;
      return acc;
    }, {});
    setCategorias((prev) => prev.map((c) => ({ ...c, count: byUI[c.key] || 0 })));
  };

  const fetchData = async (signal) => {
    setLoading(true);
    setErro(null);
    try {
      const { sortBy, sortDir } = sortMap[selectValue] ?? sortMap.relevantes;

      const selectedLabels = categoriasSel.flatMap((uiKey) => CATEGORY_UI_TO_DB[uiKey] || []);
      const uniqueLabels = Array.from(new Set(selectedLabels));
      const multiUiOrMultiLabels = categoriasSel.length !== 1 || uniqueLabels.length !== 1;

      if (!multiUiOrMultiLabels) {
        const onlyLabel = uniqueLabels[0]; 
        const qs = new URLSearchParams({
          page: String(page),
          perPage: String(PER_PAGE),
          sortBy,
          sortDir,
          category: onlyLabel, 
        });
        const res = await fetch(`${API_URL}/produtos?${qs.toString()}`, { signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const data = Array.isArray(json) ? json : json?.data || [];
        const pg = json?.pagination || {};
        setItems(data);
        setTotalPages(Number(pg.totalPages) || 1);
        setTotal(Number(pg.total) || data.length);

        const all = await fetchAll(signal);
        updateCounts(all);
        return;
      }

      const all = await fetchAll(signal);

      let filtered = all;
      if (categoriasSel.length > 0) {
        const setLabels = new Set(uniqueLabels);
        filtered = all.filter((p) => setLabels.has(p.category));
      }

      const ordered = applySort(filtered);
      const totalLocal = ordered.length;
      const totalPagesLocal = Math.max(1, Math.ceil(totalLocal / PER_PAGE));
      const currentPage = Math.min(page, totalPagesLocal);
      const start = (currentPage - 1) * PER_PAGE;
      const pageSlice = ordered.slice(start, start + PER_PAGE);

      setItems(pageSlice);
      setTotal(totalLocal);
      setTotalPages(totalPagesLocal);
      if (currentPage !== page) setPage(currentPage);

      updateCounts(all);
    } catch (e) {
      if (e.name !== "AbortError") setErro("Não foi possível carregar os produtos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ac = new AbortController();
    fetchData(ac.signal);
    return () => ac.abort();
  }, [API_URL, page, selectValue, categoriasSel]);

  const handleCategoriaChange = (catKey) => {
    setCategoriasSel((prev) =>
      prev.includes(catKey) ? prev.filter((c) => c !== catKey) : [...prev, catKey]
    );
    setPage(1);
  };

  return (
    <>
      <Page>
        <Border>
          <TitleContainer>
            <Title>Todos os produtos</Title>
            <Subtitle>Encontre o brinde perfeito para sua empresa.</Subtitle>
          </TitleContainer>

          <Select
            value={selectValue}
            onChange={(e) => {
              setSelectValue(e.target.value);
              setPage(1);
            }}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </Border>

        <Section>
          <AsideContainer>
            <Aside>
              <h3>Categorias</h3>
              {categorias.map((cat) => (
                <label key={cat.key} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <input
                    type="checkbox"
                    checked={categoriasSel.includes(cat.key)}
                    onChange={() => handleCategoriaChange(cat.key)}
                  />
                  <span style={{ marginLeft: 8 }}>{cat.label}</span>
                  <span style={{ marginLeft: "auto", color: "#6b7280" }}>({cat.count})</span>
                </label>
              ))}
            </Aside>
          </AsideContainer>

          {loading && <p>Carregando produtos…</p>}
          {erro && <p>{erro}</p>}

          {!loading && !erro && (
            items.length === 0 ? (
              <EmptyMsg>Nenhum produto disponível por enquanto.</EmptyMsg>
            ) : (
              <Grid>
                {items.map((p) => (
                  <ProductCard
                    key={p.id}
                    id={p.id}
                    price={p.price}
                    imageSrc={buildImageUrl(p.image)}
                    title={p.name}
                    description={p.description}
                    onDetails={() => navigate(`/product/${p.id}`)}
                  />
                ))}
              </Grid>
            )
          )}
        </Section>

        <PaginationComponent
          totalPages={totalPages}
          initialPage={page}
          onPageChange={setPage}
        />
      </Page>
      <PopUp />
    </>
  );
}