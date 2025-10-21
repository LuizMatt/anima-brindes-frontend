import React from "react";
import { Link } from "react-router-dom";
import {
    Wrapper,
    Container,
    Col,
    Heading,
    LinkItem,
    RowDivider,
    BottomBar,
    IconLine,
    Icon,
} from "./Footer.style";

export default function Footer() {
    const WHATSAPP_NUMBER = "5583988560234"; 
    const DISPLAY_PHONE = "(83) 9 8856-0234"; 
    const EMAIL = "comercial@animabrindes.com.br";

    return (
        <Wrapper>
            <Container>
                <Col>
                    <Heading as="h3">AnimaBrindes</Heading>
                    <p>Transformando ideias em produtos únicos e memoráveis desde 2020.</p>
                </Col>

                <Col>
                    <Heading>Links úteis</Heading>
                    <nav>
                        <LinkItem as={Link} to="/">Início</LinkItem>
                        <LinkItem as={Link} to="/products">Produtos</LinkItem>
                        <LinkItem as={Link} to="/about">Sobre nós</LinkItem>
                        <LinkItem as={Link} to="/contact">Contato</LinkItem>
                    </nav>
                </Col>

                <Col>
                    <Heading>Redes sociais</Heading>
                    <nav>
                        <LinkItem href="https://instagram.com" target="_blank" rel="noreferrer">
                            Instagram
                        </LinkItem>
                        <LinkItem
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contato WhatsApp
                        </LinkItem>
                    </nav>
                </Col>

                <Col>
                    <Heading>Informações para contato</Heading>

                    <IconLine>
                        <Icon viewBox="0 0 24 24">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.13A19.5 19.5 0 0 1 3.21 9.81 19.86 19.86 0 0 1 .08 1.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.13 1 .34 2 .62 2.95a2 2 0 0 1-.45 2.11L6 8a16 16 0 0 0 6 6l1.22-1.23a2 2 0 0 1 2.11-.45c.95.28 1.94.49 2.95.62A2 2 0 0 1 22 16.92z" />
                        </Icon>
                        <span>{DISPLAY_PHONE}</span>
                    </IconLine>

                    <IconLine>
                        <Icon viewBox="0 0 24 24">
                            <path d="M4 4h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6a2 2 0 0 1 2-2Zm18 6.3V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.7l10 6.25 10-6.25Z" />
                        </Icon>
                        <span>{EMAIL}</span>
                    </IconLine>

                    <IconLine>
                        <Icon viewBox="0 0 24 24">
                            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                        </Icon>
                        <span>Campina Grande - PB</span>
                    </IconLine>
                </Col>
            </Container>

            <RowDivider />

            <BottomBar>
                <p>© 2025 AnimaBrindes. Todos os direitos reservados</p>
            </BottomBar>
        </Wrapper>
    );
}