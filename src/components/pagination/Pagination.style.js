import styled from "styled-components";
import {
  PaginationContent,
  PaginationLink,
} from "@/components/ui/pagination";

export const StyledContent = styled(PaginationContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 2rem;
  margin-bottom: 64px;
`;

export const BaseButton = styled.div`
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const PageLink = styled(PaginationLink)`
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  transition: background 0.2s;
  background: ${({ $active }) => ($active ? "#58286A" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "inherit")};

  &:hover {
    background: ${({ $active }) => ($active ? "#58286A" : "#f1f1f1")};
    cursor: pointer;
  }
`;