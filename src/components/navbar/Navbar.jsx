import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearAuth } from "../../utils/auth";
import { useAuthToken } from "../../utils/useAuthToken";
import {
    Navbar,
    NavbarContainer,
    NavbarLogo,
    NavbarNav,
    NavLink as StyledNavLink,
    NavbarActions,
    CartBtn,
    LoginBtn,
    HamburgerBtn,
    MobileOverlay,
    MobileMenu,
    MobileHeader,
    CloseBtn,
    MobileLinks,
    MobileCTA,
    Divider
} from "./Navbar.style.js";
import { FiHome, FiBox, FiInfo, FiMail } from "react-icons/fi";
import Cart from "../cart/Cart.jsx";
import logo from "../../assets/anima-logo.svg";

const NavbarComponent = () => {
    const [showCart, setShowCart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const token = useAuthToken();
    const isLogged = !!token;

    const handleLogout = () => {
        clearAuth();
        toast.success("Você saiu da sua conta.");
        navigate("/", { replace: true });
    };

    return (
        <>
            <Navbar>
                <NavbarContainer>
                    <HamburgerBtn onClick={() => setShowMenu(true)}>
                        <span />
                        <span />
                        <span />
                    </HamburgerBtn>

                    <NavbarLogo as={Link} to="/">
                        <img src={logo} alt="anima brindes" />
                    </NavbarLogo>

                    <NavbarNav>
                        <StyledNavLink as={NavLink} to="/" end>
                            Início
                        </StyledNavLink>
                        <StyledNavLink as={NavLink} to="/products">
                            Produtos
                        </StyledNavLink>
                        <StyledNavLink as={NavLink} to="/about">
                            Sobre nós
                        </StyledNavLink>
                        <StyledNavLink as={NavLink} to="/contact">
                            Contato
                        </StyledNavLink>
                    </NavbarNav>

                    <NavbarActions>
                        <CartBtn onClick={() => setShowCart(true)} aria-label="Carrinho">
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
                        </CartBtn>

                        {isLogged ? (
                            <LoginBtn as="button" type="button" onClick={handleLogout}>
                                Sair
                            </LoginBtn>
                        ) : (
                            <LoginBtn as={Link} to="/login">
                                Login
                            </LoginBtn>
                        )}
                    </NavbarActions>
                </NavbarContainer>
            </Navbar>

            <MobileOverlay data-open={showMenu} onClick={() => setShowMenu(false)} />

            <MobileMenu data-open={showMenu}>
                <MobileHeader>
                    <img src={logo} alt="anima brindes" />
                    <CloseBtn onClick={() => setShowMenu(false)} aria-label="Fechar">
                        <span />
                        <span />
                    </CloseBtn>
                </MobileHeader>

                <Divider />

                <MobileLinks>
                    <StyledNavLink as={NavLink} to="/" end onClick={() => setShowMenu(false)}>
                        <FiHome className="icon" />
                        Início
                    </StyledNavLink>
                    <StyledNavLink as={NavLink} to="/products" onClick={() => setShowMenu(false)}>
                        <FiBox className="icon" />
                        Produtos
                    </StyledNavLink>
                    <StyledNavLink as={NavLink} to="/about" onClick={() => setShowMenu(false)}>
                        <FiInfo className="icon" />
                        Sobre nós
                    </StyledNavLink>
                    <StyledNavLink as={NavLink} to="/contact" onClick={() => setShowMenu(false)}>
                        <FiMail className="icon" />
                        Contato
                    </StyledNavLink>
                </MobileLinks>

                <Divider />

                {isLogged ? (
                    <MobileCTA as="button" type="button" onClick={() => { setShowMenu(false); handleLogout(); }}>
                        Sair
                    </MobileCTA>
                ) : (
                    <MobileCTA as={Link} to="/login" onClick={() => setShowMenu(false)}>
                        Entrar
                    </MobileCTA>
                )}
            </MobileMenu>

            {showCart && <Cart onClose={() => setShowCart(false)} />}
        </>
    );
};

export default NavbarComponent;
