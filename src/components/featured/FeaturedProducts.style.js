import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f1f1f;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #4b5563;
  margin: 0 auto 40px;
  max-width: 720px;
  line-height: 1.6;
`;

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Mobile: vira scroll horizontal */
  @media (max-width: 639px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 12px;
    gap: 16px;

    > * {
      flex: 0 0 80%;
      scroll-snap-align: start;
    }

    max-width: none;
    margin: 0;

    /* Remove barra de scroll */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const EmptyMsg = styled.p`
  color: #6b7280;
  font-size: 1rem;
`;
