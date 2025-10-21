import styled from "styled-components";

export const AboutSection = styled.section`
  max-width: 1200px;
  margin: 32px auto 80px;
  padding: 0 16px;
  color: var(--text);
  background: var(--bg);
`;

export const Header = styled.header`
  text-align: center;
  padding: 48px 0 32px;

  .highlight {
    color: var(--brand);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 36px 0 24px;
  }
`;

export const Headline = styled.h1`
  margin: 0 0 16px 0;
  font-size: clamp(28px, 4vw, 48px);
  line-height: 1.1;
  font-weight: 800;
  color: var(--text);
`;

export const Lead = styled.p`
  margin: 0 auto 12px;
  max-width: 900px;
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.5;
  color: var(--text);
`;

export const SubText = styled.p`
  margin: 0 auto;
  max-width: 900px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--muted);
`;

export const FeaturesGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.article`
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px 18px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  display: grid;
  justify-items: center;
  gap: 10px;
  transition: transform .12s ease, box-shadow .12s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  }

  &:focus-within {
    outline: 2px solid var(--brand);
    outline-offset: 4px;
  }
`;

export const FeatureIcon = styled.span`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: rgba(88, 40, 106, 0.12); 
  font-size: 24px;
`;

export const FeatureTitle = styled.h3`
  margin: 4px 0 2px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
`;

export const FeatureDesc = styled.p`
  margin: 0;
  max-width: 280px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--muted);
`;