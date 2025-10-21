import styled from "styled-components";

export const Page = styled.div`
  --page-max: 1320px;
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  padding: 32px 0;

  @media (max-width: 1024px) {
    gap: 28px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 24px 0;
  }
`;

export const TitleContainer = styled.div`
  margin: 24px 0;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }
`;

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  padding-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: var(--muted);
  margin: 0 0 16px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
`;

export const Select = styled.select`
  height: 40px;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 500;
  outline: none;
  margin-bottom: 8px;
  cursor: pointer;
  transition: border-color .2s;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 12px 0;
  }
`;

export const Grid = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: grid;
  gap: 24px;
  width: 100%;
  align-items: start;
  grid-auto-rows: auto;

  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyMsg = styled.p`
  color: #6b7280;
  font-size: 1rem;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-top: 24px;
  }
`;

export const AsideContainer = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;

  @media (max-width: 1280px) {
    flex-basis: 280px;
  }
  @media (max-width: 1024px) {
    flex-basis: 260px;
  }
  @media (max-width: 768px) {
    flex-basis: auto;
    width: 100%;
  }
`;

export const Aside = styled.aside`
  background: var(--bg);
  text-align: left;
  width: 100%;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);

  div { margin-bottom: 16px; }

  h3 {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 10px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.98rem;
    color: var(--text);
    margin-bottom: 8px;
    cursor: pointer;
  }

  input[type="checkbox"] { transform: scale(1.05); }

  input[type="range"] {
    margin: 8px 0;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    background: var(--text);
    outline: none;
    border-radius: 999px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: var(--bg);
    border: 2px solid var(--text);
    border-radius: 50%;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: var(--bg);
    border: 2px solid var(--text);
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;
