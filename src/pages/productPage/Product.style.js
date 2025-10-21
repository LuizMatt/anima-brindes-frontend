import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 16px;

  @media (max-width: 960px) {
    margin: 20px auto;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
    margin: 16px auto;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 12px;
  }
`;

export const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: #fff;
  color: var(--text);
  cursor: pointer;
  transition: transform .04s ease, background .15s ease, border-color .15s ease;

  &:hover {
    background: #f9f9fb;
    border-color: #dfe3e8;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Gallery = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: #f6f6f6;
  padding: 16px;
  min-height: 320px;

  @media (max-width: 960px) {
    padding: 12px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: clamp(260px, 55vw, 520px);
  object-fit: contain;
  display: block;

  @media (max-width: 960px) {
    height: clamp(220px, 62vw, 420px);
  }

  @media (max-width: 480px) {
    height: clamp(200px, 70vw, 360px);
  }
`;

export const EmptyImage = styled.div`
  height: clamp(260px, 55vw, 520px);
  display: grid;
  place-items: center;
  color: #888;

  @media (max-width: 960px) {
    height: clamp(220px, 62vw, 420px);
  }

  @media (max-width: 480px) {
    height: clamp(200px, 70vw, 360px);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 960px) {
    gap: 10px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 4px;
  font-size: 28px;
  line-height: 1.2;

  @media (max-width: 960px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Price = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 8px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Muted = styled.p`
  margin: 0 0 8px;
  color: var(--muted);
`;

export const Meta = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 14px;

  strong {
    color: var(--text);
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Description = styled.div`
  white-space: pre-wrap;
  line-height: 1.5;
  color: var(--text);
  margin: 8px 0 16px;
  background: #fafafa;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 10px;
  }
`;

export const QtyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  label {
    font-size: 14px;
    color: var(--muted);
  }

  @media (max-width: 480px) {
    gap: 10px;

    label {
      font-size: 13px;
    }
  }
`;

export const QtyInput = styled.input`
  width: 80px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid var(--border);
  outline: none;
  background: #fff;
  color: var(--text);

  &:focus {
    border-color: #cfd6de;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 10px;

    > button {
      width: 100%;
    }
  }
`;

export const PrimaryBtn = styled.button`
  padding: 12px 18px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background: var(--brand);
  color: #fff;
  transition: background .15s ease, transform .04s ease;

  &:hover {
    background: var(--brand-hover);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    border-radius: 10px;
  }
`;

export const GhostBtn = styled.button`
  padding: 12px 18px;
  border-radius: 12px;
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: background .15s ease, border-color .15s ease, transform .04s ease;

  &:hover {
    background: #f7f7f9;
    border-color: #dfe3e8;
    transform: translateY(-1px);
  }
  &:active { transform: translateY(0); }

  @media (max-width: 480px) {
    padding: 12px 16px;
    border-radius: 10px;
  }
`;

export const QtyControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    min-width: 36px;
    text-align: center;
    font-weight: 700;
  }

  button {
    padding: 6px 12px;
    font-size: 1.2rem;
    line-height: 1;
  }

  @media (max-width: 480px) {
    gap: 10px;

    span {
      min-width: 40px;
      font-size: 1rem;
    }

    button {
      padding: 8px 14px;
      font-size: 1.1rem;
    }
  }
`;

export const ThumbsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
  gap: 8px;
  margin-top: 12px;

  @media (max-width: 720px) {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 72px;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 6px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }

  @media (max-width: 480px) {
    grid-auto-columns: 64px;
  }
`;

export const ThumbBtn = styled.button`
  padding: 0;
  border: ${(p) => (p.$active ? "2px solid #333" : "1px solid var(--border)")};
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  overflow: hidden;
  height: 64px;
  transition: border-color .15s ease, transform .04s ease;

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }

  @media (max-width: 960px) {
    height: 56px;
  }

  @media (max-width: 480px) {
    height: 54px;
    border-radius: 7px;
  }
`;

export const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
