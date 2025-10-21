import styled from "styled-components";

const bg = "var(--footer-bg, #2e2e2e)";
const text = "var(--footer-text, #eaeaea)";
const textMuted = "var(--footer-text-muted, #cfcfcf)";
const link = "var(--footer-link, #ffffff)";
const border = "var(--footer-border, rgba(255,255,255,0.25))";

export const Wrapper = styled.footer`
  background: ${bg};
  color: ${text};
`;

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 40px 20px 28px;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
  gap: 28px;

  @media (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 28px 16px 20px;
  }

  p {
    margin: 0;
    color: ${textMuted};
    line-height: 1.6;
    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 6px;

    @media (max-width: 560px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px 16px;
    }
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 560px) {
    gap: 10px;
  }
`;

export const Heading = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: ${link};
  margin: 0 0 6px;

  @media (max-width: 560px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const LinkItem = styled.a`
  display: inline-block;
  color: ${text};
  text-decoration: none;
  font-size: 15px;
  padding: 6px 0;
  transition: opacity .15s ease, transform .15s ease;

  &:hover { opacity: .85; transform: translateX(2px); }
  &:focus-visible {
    outline: 2px solid ${border};
    outline-offset: 2px;
    border-radius: 6px;
  }

  @media (max-width: 560px) {
    font-size: 14px;
    padding: 8px 0;          
  }
`;

export const IconLine = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  align-items: center;
  gap: 10px;
  color: ${text};
  font-size: 15px;
  padding: 6px 0;
  word-break: break-word;

  @media (max-width: 560px) {
    grid-template-columns: 22px 1fr;
    font-size: 14px;
    padding: 4px 0;
    gap: 8px;
  }
`;

export const Icon = styled.svg`
  width: 22px;
  height: 22px;
  fill: ${text};
  opacity: .95;

  @media (max-width: 560px) {
    width: 20px;
    height: 20px;
  }
`;

export const RowDivider = styled.hr`
  border: 0;
  border-top: 2px solid ${border};
  max-width: 92%;
  margin: 8px auto 0;

  @media (max-width: 560px) {
    max-width: 96%;
    margin-top: 6px;
    border-top-width: 1px;
  }
`;

export const BottomBar = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 14px 20px 28px;
  text-align: center;
  color: ${text};

  p {
    margin: 0;
    font-size: 14px;
    opacity: .9;
  }

  @media (max-width: 560px) {
    padding: 12px 16px 20px;
    p { font-size: 13px; }
  }
`;