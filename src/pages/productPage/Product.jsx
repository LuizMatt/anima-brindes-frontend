import { useEffect, useMemo, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart } from "../../utils/cart";
import { toast } from "react-toastify";
import {
    Container,
    TopBar,
    BackBtn,
    Grid,
    Gallery,
    MainImage,
    EmptyImage,
    Info,
    Title,
    Price,
    Muted,
    Meta,
    Description,
    QtyRow,
    Actions,
    PrimaryBtn,
    GhostBtn,
    QtyControls,
    ThumbsGrid,
    ThumbBtn,
    ThumbImg
} from "./Product.style";
import PopUp from '../../components/pop-up/PopUp.jsx'

export default function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const buildImageUrl = useCallback(
        (imgPath) => {
            if (!imgPath) return undefined;
            let p = String(imgPath).trim();
            if (/^https?:\/\//i.test(p)) return p;
            p = p.replace(/\\/g, "/").replace(/^\/+/, "");
            p = p.replace(/^uploads\/+uploads\//, "uploads/");
            if (p.startsWith("uploads/")) {
                p = p.replace(/^uploads\//, "uploads/");
            } else if (p.startsWith("images/")) {
                p = `uploads/${p}`;
            } else {
                p = `uploads/images/${p}`;
            }
            return `${API_URL}/${p}`;
        },
        [API_URL]
    );

    useEffect(() => {
        (async () => {
            try {
                if (!id) throw new Error("ID do produto ausente");
                const res = await fetch(`${API_URL}/produtos/${encodeURIComponent(id)}`);
                if (!res.ok) throw new Error("Produto não encontrado");
                const payload = await res.json();
                const p = payload?.data ?? payload;
                setProduct(p);
            } catch (e) {
                setError(e.message || "Erro ao carregar produto");
            } finally {
                setLoading(false);
            }
        })();
    }, [id, API_URL]);

    const gallery = useMemo(() => {
        const arr = [];
        const rawImages = Array.isArray(product?.images) ? product.images : [];
        const cover = product?.cover_image || rawImages[0] || product?.image || null;

        if (cover) arr.push(cover);
        for (const x of rawImages) arr.push(x);
        if (!arr.length && product?.image) arr.push(product.image);

        const seen = new Set();
        const normalized = [];
        for (const x of arr) {
            const url = buildImageUrl(x);
            if (url && !seen.has(url)) {
                seen.add(url);
                normalized.push(url);
            }
        }
        return normalized;
    }, [product, buildImageUrl]);

    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        setActiveIndex(0);
    }, [gallery]);

    const mainImageUrl = gallery[activeIndex];

    const handleAddToCart = () => {
        if (!product) return;

        addToCart(
            {
                id: product.id,
                title: product.name,
                price: Number(product.price) || 0,
                imageUrl: mainImageUrl,
                description: product.description || ""
            },
            qty
        );

        toast.success(`${qty}x ${product.name} adicionado ao carrinho!`, {
            icon: "🛒"
        });
    };

    const handleSmartBack = () => {
        const hasHistory = window.history.length > 1;
        const sameOriginReferrer =
            document.referrer &&
            new URL(document.referrer).origin === window.location.origin;

        if (hasHistory || sameOriginReferrer) {
            navigate(-1);
        } else {
            navigate("/produtos");
        }
    };

    if (loading) return <p>Carregando…</p>;
    if (error) return <p style={{ color: "crimson" }}>{error}</p>;
    if (!product) return <p>Produto não encontrado.</p>;

    const price = product.price ?? null;

    return (
        <>
        <Container>
            <TopBar>
                <BackBtn onClick={handleSmartBack} aria-label="Voltar">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Voltar
                </BackBtn>
            </TopBar>

            <Grid>
                <Gallery>
                    {mainImageUrl ? (
                        <MainImage src={mainImageUrl} alt={product.name} loading="lazy" />
                    ) : (
                        <EmptyImage>Sem imagem</EmptyImage>
                    )}

                    {gallery.length > 1 && (
                        <ThumbsGrid role="list">
                            {gallery.map((src, idx) => (
                                <ThumbBtn
                                    key={`${src}-${idx}`}
                                    onClick={() => setActiveIndex(idx)}
                                    aria-label={`Selecionar imagem ${idx + 1}`}
                                    aria-current={idx === activeIndex ? "true" : "false"}
                                    $active={idx === activeIndex}
                                    title="Ver imagem"
                                >
                                    <ThumbImg
                                        src={src}
                                        alt={`${product.name} - ${idx + 1}`}
                                        loading="lazy"
                                    />
                                </ThumbBtn>
                            ))}
                        </ThumbsGrid>
                    )}
                </Gallery>

                <Info>
                    <Title>{product.name}</Title>

                    {price !== null ? (
                        <Price>
                            R$ {Number(price).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </Price>
                    ) : (
                        <Muted>Preço sob consulta</Muted>
                    )}

                    {product.category && (
                        <Meta>
                            Categoria: <strong>{product.category}</strong>
                        </Meta>
                    )}
                    {product.barcode && (
                        <Meta>
                            Código: <strong>{product.barcode}</strong>
                        </Meta>
                    )}

                    <Description>{product.description || "Sem descrição."}</Description>

                    <QtyRow>
                        <label>Quantidade</label>
                        <QtyControls>
                            <GhostBtn
                                type="button"
                                onClick={() => setQty((q) => Math.max(1, q - 1))}
                                aria-label="Diminuir quantidade"
                            >
                                –
                            </GhostBtn>

                            <span>{qty}</span>

                            <GhostBtn
                                type="button"
                                onClick={() => setQty((q) => q + 1)}
                                aria-label="Aumentar quantidade"
                            >
                                +
                            </GhostBtn>
                        </QtyControls>
                    </QtyRow>

                    <Actions>
                        <PrimaryBtn onClick={handleAddToCart}>Adicionar ao carrinho</PrimaryBtn>
                        <GhostBtn onClick={handleSmartBack}>Continuar comprando</GhostBtn>
                    </Actions>
                </Info>
            </Grid>
        </Container>
        <PopUp></PopUp>
        </>
    );
}
