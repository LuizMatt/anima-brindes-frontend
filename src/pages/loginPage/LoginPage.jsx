import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuth } from "../../utils/auth";
import PopUp from "../../components/pop-up/PopUp.jsx"
import {
    Wrapper,
    Card,
    Title,
    Subtitle,
    Form,
    Field,
    Label,
    Input,
    PasswordWrap,
    TogglePw,
    ActionsRow,
    CheckboxWrap,
    SubmitButton,
    HelperRow,
    ErrorMsg,
} from "./Login.style";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [remember, setRemember] = useState(true);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (loading) return;

        setErrorMsg("");
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/usuarios/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim(), password }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                const apiErr =
                    data?.error || data?.message || "Credenciais inválidas. Tente novamente.";
                setErrorMsg(apiErr);
                return;
            }

            const token = data?.token ?? data?.data?.token;
            const userId = data?.user?.id ?? data?.data?.user_id;

            if (!token || !userId) {
                setErrorMsg("Resposta de login inesperada. Tente novamente.");
                return;
            }

            setAuth({ token, user_id: userId, remember });

            navigate("/", { replace: true });
        } catch (err) {
            console.error("Erro no login:", err);
            setErrorMsg("Erro ao conectar com o servidor. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <Card>
                <Title>Bem-vindo!</Title>
                <Subtitle>Entre para continuar</Subtitle>

                {errorMsg && <ErrorMsg role="alert">{errorMsg}</ErrorMsg>}

                <Form onSubmit={handleLogin} noValidate>
                    <Field>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seuemail@exemplo.com"
                            required
                            autoComplete="email"
                            aria-invalid={!!errorMsg}
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="password">Senha</Label>
                        <PasswordWrap>
                            <Input
                                id="password"
                                type={showPw ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                minLength={6}
                                autoComplete="current-password"
                            />
                            <TogglePw
                                type="button"
                                onClick={() => setShowPw((v) => !v)}
                                aria-label={showPw ? "Ocultar senha" : "Mostrar senha"}
                            >
                                {showPw ? "Ocultar" : "Mostrar"}
                            </TogglePw>
                        </PasswordWrap>
                    </Field>

                    <ActionsRow>
                        <CheckboxWrap>
                            <input
                                id="remember"
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            <label htmlFor="remember">Lembrar de mim</label>
                        </CheckboxWrap>

                        <Link to="/recuperar-senha">Esqueci minha senha</Link>
                    </ActionsRow>

                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? "Entrando..." : "Entrar"}
                    </SubmitButton>
                </Form>

                <HelperRow>
                    <span>Não tem conta?</span>
                    <Link to="/signup">Criar</Link>
                </HelperRow>

            </Card>
            <PopUp></PopUp>
        </Wrapper>
    );
}
