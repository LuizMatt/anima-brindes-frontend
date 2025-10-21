import styled from "styled-components";

export const Page = styled.section`
  margin: 95px auto 105px;
  max-width: 1200px;
  padding: 0 16px;

  @media (max-width: 640px) {
    margin: 72px auto 80px;
    padding: 0 12px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 24px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 640px) {
    gap: 16px;
  }
`;

export const Card = styled.div`
  background: #f7f7f8;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: clamp(16px, 2.2vw, 24px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);

  &.social {
    align-self: start;
  }

  p.muted {
    color: var(--muted);
    margin: 8px 0 16px;
    line-height: 1.5;
    font-size: clamp(14px, 1.2vw, 15px);
  }

  .highlight {
    color: #25D366;
  }
`;

export const CardTitle = styled.h3`
  font-size: clamp(18px, 1.8vw, 20px);
  font-weight: 700;
  color: var(--text);
  margin: 0 0 6px 0;
`;

export const Line = styled.hr`
  border: none;
  height: 1px;
  background: var(--border);
  margin: 10px 0 16px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;

  @media (max-width: 480px) {
    align-items: flex-start;
    gap: 10px;
  }
`;

export const IconWrap = styled.span`
  width: clamp(30px, 3vw, 34px);
  height: clamp(30px, 3vw, 34px);
  min-width: clamp(30px, 3vw, 34px);
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #ececec;

  svg {
    font-size: clamp(14px, 1.6vw, 16px);
    color: var(--text);
    opacity: 0.85;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: clamp(11px, 1vw, 12px);
  font-weight: 600;
  color: var(--text);
  opacity: 0.9;
  margin-bottom: 2px;
`;

export const Value = styled.span`
  display: block;
  font-size: clamp(13px, 1.2vw, 14px);
  color: var(--muted);
  line-height: 1.45;
`;

export const CTABox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 6px 0 18px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 14px;
  width: fit-content;
  border-radius: 999px;
  background: var(--brand);
  color: #fff;
  font-weight: 700;
  font-size: clamp(13px, 1.2vw, 14px);
  border: 1px solid rgba(0,0,0,0.05);
  transition: transform .12s ease, background .15s ease;

  &:hover {
    background: var(--brand-hover);
    transform: translateY(-1px);
  }

  svg { font-size: clamp(15px, 1.4vw, 16px); }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const LocationBox = styled.div`
  margin-top: 6px;

  h4 {
    font-size: clamp(13px, 1.1vw, 14px);
    font-weight: 700;
    color: var(--text);
    margin: 0 0 8px 0;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 6px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const SocialBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: #fff;
  color: var(--text);
  font-weight: 600;
  font-size: clamp(13px, 1.2vw, 14px);
  transition: transform .12s ease, background .15s ease, border-color .15s ease;

  &:hover {
    transform: translateY(-1px);
    background: #f1f1f1;
    border-color: #dcdcdc;
  }

  svg { font-size: clamp(15px, 1.4vw, 16px); }

  @media (max-width: 480px) {
    flex: 1 1 calc(50% - 10px);
    justify-content: center;
  }
`;
