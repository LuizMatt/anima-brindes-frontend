export const setAuth = ({ token, user_id }) => {
    localStorage.setItem("auth_token", token);
    localStorage.setItem("user_id", String(user_id));
    try { window.dispatchEvent(new Event("auth:change")); } catch { }
};

export const getToken = () => localStorage.getItem("auth_token") || "";
export const getUserId = () => localStorage.getItem("user_id") || "";

export const clearAuth = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_id");
    try { window.dispatchEvent(new Event("auth:change")); } catch { }
};

export const authHeaders = () => {
    const t = getToken();
    return t ? { Authorization: `Bearer ${t}` } : {};
};
