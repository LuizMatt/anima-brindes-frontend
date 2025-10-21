import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;

  @media (max-width: 640px) {
    flex-direction: row;
    gap: 12px;
    padding: 12px;
    align-items: stretch;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  display: block;
  overflow: hidden;
  border-radius: 12px;
  background: #f7f7f8;
  cursor: pointer;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }

  @media (max-width: 640px) {
    width: 120px;
    min-width: 120px;
    aspect-ratio: 1 / 1;   
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  flex: 1;
  padding: 0 4px;

  @media (max-width: 640px) {
    padding: 0;
    gap: 6px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 1.25;
  color: var(--text);
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const Desc = styled.p`
  font-size: 14px;
  color: var(--muted);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 13.5px;
    -webkit-line-clamp: 2;
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-top: 8px;
  }
`;

const BaseBtn = styled.button`
  appearance: none;
  border: 0;
  border-radius: 12px;
  padding: 10px 12px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  transition: transform .15s ease, background .15s ease, box-shadow .15s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    width: 100%;
    height: 42px;
  }
`;

export const PrimaryBtn = styled(BaseBtn)`
  background: var(--brand);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    background: var(--brand-hover);
    transform: translateY(-1px);
  }
`;

export const SecondaryBtn = styled(BaseBtn)`
  background: #fff;
  color: var(--text);
  border: 1px solid var(--border);

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    transform: translateY(-1px);
  }
`;
