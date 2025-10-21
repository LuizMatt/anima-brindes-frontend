import { useEffect, useState } from "react";
import { getToken } from "./auth";

export function useAuthToken() {
    const [token, setToken] = useState(getToken());

    useEffect(() => {
        const refresh = () => setToken(getToken());
        window.addEventListener("storage", refresh);
        window.addEventListener("auth:change", refresh);
        return () => {
            window.removeEventListener("storage", refresh);
            window.removeEventListener("auth:change", refresh);
        };
    }, []);

    return token;
}
