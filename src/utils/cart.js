const KEY = "cart";

const read = () => JSON.parse(sessionStorage.getItem(KEY)) || [];
const write = (cart) => sessionStorage.setItem(KEY, JSON.stringify(cart));
const ping = () => { try { window.dispatchEvent(new Event("storage")); } catch { } };

export const addToCart = (product, qty = 1) => {
    const cart = read();
    const existing = cart.find((i) => i.id === product.id);
    if (existing) existing.quantity += qty;
    else cart.push({ ...product, quantity: qty });
    write(cart);
    ping();
};

export const incrementItem = (id, step = 1) => {
    const cart = read();
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    item.quantity += step;
    write(cart);
    ping();
};

export const decrementItem = (id) => {
    let cart = read();
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    item.quantity -= 1;
    if (item.quantity <= 0) cart = cart.filter((i) => i.id !== id);
    write(cart);
    ping();
};

export const clearCart = () => {
    sessionStorage.removeItem(KEY);
    ping();
};

export const getCartItems = () => read();
