import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { Section, Title, Subtitle, Grid, EmptyMsg } from "./FeaturedProducts.style";

export default function FeaturedProducts() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    const buildImageUrl = (imgPath) => {
        if (!imgPath) return null;
        let p = String(imgPath).trim();
        if (/^https?:\/\//i.test(p)) return p;
        p = p.replace(/\\/g, "/").replace(/^\/+/, "");
        p = p.replace(/^uploads\/+uploads\//, "uploads/");
        if (p.startsWith("uploads/")) {
        } else if (p.startsWith("images/")) {
            p = `uploads/${p}`;
        } else {
            p = `uploads/images/${p}`;
        }
        const base = (API_URL ?? window.location.origin).replace(/\/+$/, "");
        return `${base}/${p}`;
    };

    useEffect(() => {
        let isMounted = true;
        const fetchProdutos = async () => {
            try {
                setLoading(true);
                const resp = await fetch(`${API_URL}/produtos/featured`);
                if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                const data = await resp.json();
                if (isMounted) setProdutos(Array.isArray(data) ? data : []);
            } catch {
                if (isMounted) setErro("Não foi possível carregar os produtos em destaque.");
            } finally {
                if (isMounted) setLoading(false);
            }
        };
        fetchProdutos();
        return () => {
            isMounted = false;
        };
    }, [API_URL]);

    return (
        <Section>
            <Title>Produtos em destaque</Title>
            <Subtitle>
                Conheça nossa seleção de brindes mais populares,
                perfeitos para fortalecer a marca da sua empresa
            </Subtitle>

            {loading && <p>Carregando produtos…</p>}
            {erro && <p>{erro}</p>}

            {!loading && !erro && (
                produtos.length === 0 ? (
                    <EmptyMsg>Nenhum produto em destaque por enquanto.</EmptyMsg>
                ) : (
                    <Grid>
                        {produtos.map((p) => {
                            const imageUrl = buildImageUrl(p.image);
                            return (
                                <ProductCard
                                    key={p.id}
                                    id={p.id}                          
                                    imageSrc={imageUrl ?? undefined}
                                    title={p.name}
                                    description={p.description}
                                    price={p.price}                    
                                    onDetails={() => navigate(`/product/${p.id}`)}
                                />

                            );
                        })}
                    </Grid>
                )
            )}
        </Section>
    );
}
