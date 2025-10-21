export function generateOrderMessage(order) {
    const itensTexto = order.items
        .map((item) => `• ${item.product.name} x${item.quantity}`)
        .join("\n");

    return (
        `*Novo pedido AnimaBrindes*\n\n` +
        `- *Cliente:* ${order.user.name}\n` +
        `- *Email:* ${order.user.email}\n\n` +
        `- *Itens:*\n${itensTexto}\n\n` 
    );
}

export function generateWhatsappLink(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
