import styled from "styled-components";
import { breakpoints } from "../../styles/index.js"

export const FloatingButton = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;


`;

export const Button = styled.button`
  background-color: #25d366; /* verde do WhatsApp */
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 14px rgba(0,0,0,0.3);
  }

  svg {
    color: white;
    font-size: 32px;
  }

  @media (max-width: ${breakpoints.tablet}){
    width: 48px;
    height: 48px;
  }
`;

export const Popup = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  background: white;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  font-size: 14px;
  width: 220px;
  color: #333;
  animation: fadein 0.25s ease forwards;

  @keyframes fadein {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;