import styled, { css } from "styled-components"

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;

  ${(props) =>
        props.$visible &&
        css`
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    `}
  ${(props) =>
        props.$existing &&
        css`
      opacity: 0;
      transform: translateX(100%);
      pointer-events: none;
    `}
`;

export const CartContainer = styled.div`
  background-color: #ffffffff;
  color: black;
  width: 350px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1;
  padding-bottom: 12px;

  h2 {
    font-size: 20px;
    margin: 0;
  }
`;

export const CartClose = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  color: #000000;
  cursor: pointer;
  padding: 4px 8px;

  &:hover {
    color: #58286A;
  }
`;

export const CartEmpty = styled.div`
  margin-top: 40px;
  text-align: center;
  color: #94a3b8;
`;

export const CartItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

export const CartItem = styled.li`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
  border-bottom: 1px solid #D9D9D9;
  padding-bottom: 10px;
`;

export const CartItemImage = styled.div`
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
    background: #58286A;
  }
`;

export const CartItemDetails = styled.div`
  flex: 1;
`;

export const ItemTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin: 0;
`;

export const ItemPrice = styled.p`
  font-size: 13px;
  color: #58286A;
`;

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;

  button {
    background-color: #58286A;
    color: white;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #a847cccc;
    }
  }
`;

export const CartFooter = styled.div`
  margin-top: auto;
  border-top: 1px solid #D9D9D9;
  padding-top: 16px;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #F37A1F;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ff6f00cc;
  }
`;