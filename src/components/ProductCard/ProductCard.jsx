import { addToCart } from "../../utils/cart";
import { toast } from "react-toastify";
import {
    Card,
    ImageWrap,
    Content,
    Title,
    Desc,
    Actions,
    PrimaryBtn,
    SecondaryBtn
} from "./ProductCard.style";

const MAX_DESC = 180;

function safeTruncate(str = "", n = 180) {
    if (!str) return "";
    if (str.length <= n) return str;

    const slice = str.slice(0, n);
    const lastSpace = slice.lastIndexOf(" ");
    let truncated = (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trim();
    truncated = truncated.replace(/[.,;:]+$/, "");
    return truncated + "…";
}

export default function ProductCard({
    id,
    imageSrc,
    title,
    description,
    price = 0,
    onAddToCart,
    onDetails
}) {
    const canAdd = id !== undefined && id !== null;

    const handleAdd = () => {
        if (!canAdd) return;

        const product = {
            id,
            title,
            price: Number(price) || 0,
            imageUrl: imageSrc || undefined,
            description: description || ""
        };

        addToCart(product, 1);
        toast.success(`1x ${title} adicionado ao carrinho!`, { icon: "🛒" });

        if (typeof onAddToCart === "function") {
            onAddToCart(product, 1);
        }
    };

    return (
        <Card>
            <ImageWrap onClick={onDetails} aria-label={`Abrir ${title}`} tabIndex={0}>
                <img src={imageSrc} alt={title} loading="lazy" />
            </ImageWrap>

            <Content>
                <Title>{title}</Title>
                {description && (
                    <Desc title={description}>{safeTruncate(description, MAX_DESC)}</Desc>
                )}

                <Actions>
                    <PrimaryBtn type="button" onClick={handleAdd} disabled={!canAdd}>
                        <svg
                                viewBox="0 0 24 24"
                                width="22"
                                height="22"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </PrimaryBtn>
                    <SecondaryBtn type="button" onClick={onDetails}>
                        Mais detalhes
                    </SecondaryBtn>
                </Actions>
            </Content>
        </Card>
    );
}
