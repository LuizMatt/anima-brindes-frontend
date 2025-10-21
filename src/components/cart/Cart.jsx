import { useEffect, useState } from "react";
import {
    CartOverlay,
    CartContainer,
    CartHeader,
    CartClose,
    CartEmpty,
    CartItems,
    CartItem,
    CartItemImage,
    CartItemDetails,
    ItemTitle,
    ItemQuantity,
    CartFooter,
    CheckoutButton,
} from "./Cart.style.js";
import { incrementItem, decrementItem, getCartItems, clearCart } from "../../utils/cart";
import { generateOrderMessage, generateWhatsappLink } from "../../utils/whatsapp";
import { toast } from "react-toastify";

const CartComponent = ({ onClose }) => {
    const [cart, setCart] = useState([]);
    const [visible, setVisible] = useState(false);
    const [existing, setExisting] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const WHATSAPP_NUMBER = "5583988560234"; 

    const loadCart = () => setCart(getCartItems());

    useEffect(() => {
        loadCart();
        window.addEventListener("storage", loadCart);
        setVisible(true);
        return () => window.removeEventListener("storage", loadCart);
    }, []);

    const handleClose = () => {
        setExisting(true);
        setTimeout(() => onClose(), 300);
    };

    const handleIncrement = (id) => {
        incrementItem(id);
        loadCart();
    };

    const handleDecrement = (id) => {
        decrementItem(id);
        loadCart();
    };

    const handleCheckout = async () => {
        const user_id = localStorage.getItem("user_id");
        if (!user_id) {
            toast.error("Usuário não logado.");
            return;
        }

        const token = localStorage.getItem("auth_token");
        const auth = token ? { Authorization: `Bearer ${token}` } : {};

        const orderData = {
            user_id: Number(user_id),
            items: cart.map((item) => ({
                product_id: item.id,
                quantity: item.quantity,
            })),
        };

        try {
            const response = await fetch(`${API_URL}/pedidos`, {
                method: "POST",
                headers: { "Content-Type": "application/json", ...auth },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                let detail = "";
                try {
                    detail = (await response.json())?.message || "";
                } catch { }
                throw new Error(`Erro ao criar pedido. ${response.status} ${detail}`);
            }

            const created = await response.json();
            const createdId =
                created?.order?.id ??
                created?.id ??
                created?.data?.id ??
                created?.data?.pedido?.id ??
                (Array.isArray(created?.data) ? created.data[0]?.id : undefined) ??
                created?.pedido_id ??
                created?.pedido?.pedido_id;

            if (!createdId) {
                console.log("Resposta do backend (POST /pedidos):", created);
                throw new Error("Resposta sem ID do pedido.");
            }

            let fullOrder = created?.order;

            if (!fullOrder) {
                const fullOrderRes = await fetch(`${API_URL}/pedidos/${createdId}`, {
                    headers: { "Content-Type": "application/json", ...auth },
                });
                if (!fullOrderRes.ok) {
                    let detail = "";
                    try {
                        detail = (await fullOrderRes.json())?.message || "";
                    } catch { }
                    throw new Error(`Erro ao buscar pedido. ${fullOrderRes.status} ${detail}`);
                }
                fullOrder = await fullOrderRes.json();
            }

            const message = generateOrderMessage(fullOrder);
            const whatsappLink = generateWhatsappLink(WHATSAPP_NUMBER, message); 

            clearCart();
            onClose();
            toast.success("Pedido criado com sucesso! Redirecionando para o WhatsApp...");
            window.open(whatsappLink, "_blank");
        } catch (error) {
            console.error("Erro ao finalizar pedido:", error);
            toast.error(error.message || "Erro ao finalizar pedido.");
        }
    };

    return (
        <CartOverlay $visible={visible} $exiting={existing}>
            <CartContainer>
                <CartHeader>
                    <h2>Carrinho</h2>
                    <CartClose onClick={handleClose}>×</CartClose>
                </CartHeader>

                {cart.length === 0 ? (
                    <CartEmpty>Seu carrinho está vazio.</CartEmpty>
                ) : (
                    <>
                        <CartItems>
                            {cart.map((item) => (
                                <CartItem key={item.id}>
                                    <CartItemImage>
                                        <img src={item.imageUrl} alt={item.title} />
                                    </CartItemImage>
                                    <CartItemDetails>
                                        <ItemTitle>{item.title}</ItemTitle>
                                        <ItemQuantity>
                                            <button onClick={() => handleDecrement(item.id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleIncrement(item.id)}>+</button>
                                        </ItemQuantity>
                                    </CartItemDetails>
                                </CartItem>
                            ))}
                        </CartItems>

                        <CartFooter>
                            <CheckoutButton onClick={handleCheckout}>
                                Finalizar pedido
                            </CheckoutButton>
                        </CartFooter>
                    </>
                )}
            </CartContainer>
        </CartOverlay>
    );
};

export default CartComponent;