import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100dvh;
  display: grid;
  place-items: center;
  background: var(--bg);
  padding: 24px;
`;

export const Card = styled.section`
  width: 100%;
  max-width: 420px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
  margin: 0 0 6px;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text);
`;

export const Subtitle = styled.p`
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 0.95rem;
`;

export const ErrorMsg = styled.div`
  background: rgba(255, 93, 93, 0.12);
  border: 1px solid rgba(255, 93, 93, 0.3);
  color: #d62f2f;
  padding: 10px 12px;
  border-radius: var(--radius);
  font-size: 0.9rem;
  margin-bottom: 14px;
`;

export const Form = styled.form`
  display: grid;
  gap: 14px;
`;

export const Field = styled.div`
  display: grid;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: var(--text);
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  outline: none;
  background: #fff;
  color: var(--text);
  font-size: 0.95rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    border-color: var(--brand);
    box-shadow: 0 0 0 3px rgba(88, 40, 106, 0.15);
  }

  &[aria-invalid="true"] {
    border-color: #d62f2f;
  }
`;

export const PasswordWrap = styled.div`
  position: relative;
  display: grid;

  ${Input} {
    padding-right: 84px; /* espaço pro botão mostrar/ocultar */
  }
`;

export const TogglePw = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  translate: 0 -50%;
  height: 32px;
  padding: 0 10px;
  border: 1px solid var(--border);
  background: #f9fafb;
  color: var(--muted);
  border-radius: calc(var(--radius) - 4px);
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #f3f4f6;
    color: var(--text);
  }
`;

export const ActionsRow = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--muted);
    font-size: 0.9rem;
    transition: color 0.2s;

    &:hover {
      color: var(--text);
    }
  }
`;

export const CheckboxWrap = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.9rem;

  input {
    accent-color: var(--brand);
    width: 16px;
    height: 16px;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 6px;
  width: 100%;
  height: 46px;
  border: none;
  border-radius: var(--radius);
  background: var(--brand);
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.2px;
  cursor: pointer;
  transition: background 0.2s, transform 0.02s;

  &:hover {
    background: var(--brand-hover);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const HelperRow = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 0.95rem;

  a {
    color: var(--brand);
    font-weight: 600;
    transition: color 0.2s;

    &:hover {
      color: var(--brand-hover);
    }
  }
`;
