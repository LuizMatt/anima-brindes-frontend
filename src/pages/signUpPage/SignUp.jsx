import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuth } from "../../utils/auth";
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
} from "./SignUp.style";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [pw2, setPw2] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [accept, setAccept] = useState(true);
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    function validate() {
        if (!name.trim()) return "Informe seu nome.";
        if (!email.trim()) return "Informe um email.";
        const emailOk = /\S+@\S+\.\S+/.test(email);
        if (!emailOk) return "Email inválido.";
        if (pw.length < 6) return "A senha deve ter pelo menos 6 caracteres.";
        if (pw !== pw2) return "As senhas não conferem.";
        if (!accept) return "É necessário aceitar os termos.";
        return "";
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (loading) return;

        const message = validate();
        if (message) {
            toast.warning(message);
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/usuarios/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    password: pw,
                }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                const apiErr = data?.error || data?.message || "Falha ao cadastrar.";
                toast.error(apiErr);
                return;
            }

            // Se a API já devolve token + user, faz login automático
            const token = data?.token ?? data?.data?.token;
            const userId = data?.user?.id ?? data?.data?.user_id;

            if (token && userId) {
                setAuth({ token, user_id: userId, remember: true });
                toast.success("Conta criada! Entrando...");
                navigate("/", { replace: true });
                return;
            }

            toast.success("Conta criada com sucesso! Faça login para continuar.");
            navigate("/login", { replace: true });
        } catch (err) {
            console.error("Erro no cadastro:", err);
            toast.error("Erro ao conectar com o servidor. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <Card>
                <Title>Criar conta</Title>
                <Subtitle>Preencha seus dados para começar</Subtitle>

                <Form onSubmit={handleSignUp} noValidate>
                    <Field>
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Seu nome completo"
                            required
                            autoComplete="name"
                        />
                    </Field>

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
                            aria-invalid={false}
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="password">Senha</Label>
                        <PasswordWrap>
                            <Input
                                id="password"
                                type={showPw ? "text" : "password"}
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                                placeholder="Mínimo de 6 caracteres"
                                required
                                minLength={6}
                                autoComplete="new-password"
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

                    <Field>
                        <Label htmlFor="password2">Confirmar senha</Label>
                        <Input
                            id="password2"
                            type={showPw ? "text" : "password"}
                            value={pw2}
                            onChange={(e) => setPw2(e.target.value)}
                            placeholder="Repita a senha"
                            required
                            minLength={6}
                            autoComplete="new-password"
                        />
                    </Field>

                    <ActionsRow>
                        <CheckboxWrap>
                            <input
                                id="terms"
                                type="checkbox"
                                checked={accept}
                                onChange={(e) => setAccept(e.target.checked)}
                            />
                            <label htmlFor="terms">
                                Li e concordo com os <Link to="/termos">Termos de Uso</Link>
                            </label>
                        </CheckboxWrap>
                    </ActionsRow>

                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? "Criando conta..." : "Criar conta"}
                    </SubmitButton>
                </Form>

                <HelperRow>
                    <span>Já tem conta?</span>
                    <Link to="/login">Entrar</Link>
                </HelperRow>
            </Card>
        </Wrapper>
    );
}
