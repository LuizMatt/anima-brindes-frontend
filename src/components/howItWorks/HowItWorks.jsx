import React from "react";
import {
    Section,
    Title,
    Subtitle,
    Cards,
    Card,
    IconWrap,
    CardTitle,
    CardText,
} from "./HowItWorks.style";

export default function HowItWorks() {
    return (
        <Section aria-labelledby="how-it-works-title">
            <Title id="how-it-works-title">Como Funciona</Title>
            <Subtitle>
                Processo simples e rápido para criar seus produtos personalizados
            </Subtitle>

            <Cards>
                <Card>
                    <IconWrap aria-hidden="true">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
                            <path d="M20 20L16.5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </IconWrap>
                    <CardTitle>Escolha o produto</CardTitle>
                    <CardText>
                        Navegue pelo nosso catálogo e selecione o produto ideal para sua necessidade
                    </CardText>
                </Card>

                <Card>
                    <IconWrap aria-hidden="true">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <path d="M4 5h16v10H7l-3 3V5z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            <path d="M7 9h10M7 12h7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </IconWrap>
                    <CardTitle>Entre em contato conosco</CardTitle>
                    <CardText>
                        Realize seu orçamento com um atendimento personalizado
                    </CardText>
                </Card>

                <Card>
                    <IconWrap aria-hidden="true">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="6" width="11" height="8" rx="1" stroke="white" strokeWidth="2" />
                            <path d="M14 9h4l3 3v2h-7V9z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            <circle cx="7.5" cy="17.5" r="1.5" fill="white" />
                            <circle cx="17.5" cy="17.5" r="1.5" fill="white" />
                        </svg>
                    </IconWrap>
                    <CardTitle>Receba o pedido</CardTitle>
                    <CardText>
                        Produzimos com qualidade e entregamos no prazo combinado, onde você estiver
                    </CardText>
                </Card>
            </Cards>
        </Section>
    );
}