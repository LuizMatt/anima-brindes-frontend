import styled from "styled-components"
import { breakpoints } from "../../styles/index.js"

export const Container = styled.div`
    display: flex;
    min-height: 75vh;
    max-width: 98%;
    border-radius: 24px;
    margin: 0 auto;
    margin-top: 120px;

        @media (max-width: ${breakpoints.tablet}){
        max-width: auto;
        margin-top: 64px;
        min-height: 64px;

        img{
            max-width: 100%;
        }
    }
`
export const ImagemCarrossel = styled.img`
    display: block;
    border-radius: 24px;
    object-fit: contain;
`

export const NavButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const PrevButton = styled(NavButton)`
  left: 1rem;
`;

export const NextButton = styled(NavButton)`
  right: 1rem;
`;

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;

  @media (max-width: ${breakpoints.tablet}){
    bottom: 5px;
  }
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#000" : "rgba(0,0,0,0.4)")};
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  padding: 0;

  &:hover {
    background: ${({ $active }) => ($active ? "#000" : "rgba(0,0,0,0.7)")};
  }

  @media (max-width: ${breakpoints.tablet}){
    height: 6px;
    width: 6px;
  } 
`;
