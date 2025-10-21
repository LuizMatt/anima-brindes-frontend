import styled from "styled-components";

const brand = "var(--brand-primary, #5a2a75)";

export const Section = styled.section`
  padding: 80px 16px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: clamp(28px, 3.5vw, 40px);
  line-height: 1.2;
  font-weight: 700;
  color: #1f1f1f;
  margin: 0 0 16px;
`;

export const Subtitle = styled.p`
  max-width: 720px;
  margin: 0 auto 56px;
  font-size: 18px;
  color: #4a4a4a;
`;

export const Cards = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 28px 20px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  transition: transform .15s ease, box-shadow .15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.08);
  }
`;

export const IconWrap = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 999px;
  background: ${brand};
  display: grid;
  place-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1f1f1f;
  margin: 0;
`;

export const CardText = styled.p`
  margin: 0;
  color: #4a4a4a;
  max-width: 280px;
  font-size: 14px;
  line-height: 1.45;
`;