import styled from "styled-components";

export const Navbar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding-block: clamp(10px, 2.2vw, 18px);
`;

export const NavbarContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  margin-inline: auto;
  padding-inline: clamp(16px, 3vw, 32px);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: clamp(12px, 2vw, 28px);
`;

export const NavbarLogo = styled.div`
  justify-self: center;
  img {
    display: block;
    height: clamp(36px, 5.5vw, 60px);
  }
  @media (min-width: 769px) {
    justify-self: start;
  }
`;

export const NavbarNav = styled.nav`
  display: none;
  @media (min-width: 769px) {
    justify-self: center;
    display: flex;
    align-items: center;
    gap: clamp(16px, 3vw, 32px);
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-weight: 600;
  font-size: clamp(14px, 1.05vw, 16px);
  color: var(--muted);
  text-decoration: none;
  padding-block: 0.35em;
  transition: color .2s ease;

  &::after { content: none; }

  &:hover { color: var(--text); }
  &.is-active { color: var(--brand); font-weight: 700; }

  @media (min-width: 769px) {
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      height: 2px;
      width: 100%;
      background: var(--brand);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .25s ease;
    }
    &:hover::after { transform: scaleX(1); }
    &.is-active::after { transform: scaleX(1); }
  }
`;


export const NavbarActions = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.6vw, 18px);
`;

export const CartBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  background: none;
  border: none;
  cursor: pointer;
`;

export const LoginBtn = styled.a`
  background: var(--brand);
  color: #fff;
  font-size: clamp(12px, 1vw, 13px);
  font-weight: 600;
  padding: clamp(6px, 1vw, 8px) clamp(12px, 1.8vw, 16px);
  border-radius: 999px;
  text-decoration: none;
  transition: background .15s ease, transform .15s ease;
  &:hover { background: var(--brand-hover); transform: translateY(-1px); }
  @media (max-width: 768px) { display: none; }
`;

export const HamburgerBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
  }
  @media (min-width: 769px) { display: none; }
`;

export const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.48);
  opacity: 0;
  pointer-events: none;
  transition: opacity .28s ease;
  z-index: 99;
  &[data-open="true"] {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const MobileMenu = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: min(82vw, 320px);
  height: 100vh;
  background: var(--bg);
  border-right: 1px solid var(--border);
  box-shadow: 2px 0 24px rgba(0,0,0,.12);
  transform: translateX(-100%);
  transition: transform .28s ease;
  z-index: 100;
  padding: 14px 16px 16px;
  display: flex;
  flex-direction: column;
  &[data-open="true"] { transform: translateX(0); }
`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  img { height: 32px; }
`;

export const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  position: relative;
  span {
    position: absolute;
    width: 16px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
  }
  span:first-child { transform: rotate(45deg); }
  span:last-child { transform: rotate(-45deg); }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: var(--border);
  margin: 12px 0;
`;

export const MobileLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
  flex-grow: 1;
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 8px;
    border-radius: 10px;
    font-size: 1.02rem;
    font-weight: 700;
    color: var(--text);
    text-decoration: none;
    transition: background .18s ease, transform .06s ease;
  }
  a .icon { font-size: 1.15rem; color: var(--muted); }
  a:hover { background: rgba(0,0,0,.05); }
  a.is-active { color: var(--brand); }
`;

export const MobileCTA = styled.a`
  margin-top: auto;
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  background: var(--brand);
  color: #fff;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  transition: transform .12s ease, filter .15s ease;
  &:hover { filter: brightness(.95); transform: translateY(-1px); }
`;
