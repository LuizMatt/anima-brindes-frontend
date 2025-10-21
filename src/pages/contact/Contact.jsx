import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

import {
  Page,
  Grid,
  Card,
  CardTitle,
  Line,
  Row,
  IconWrap,
  Label,
  Value,
  CTABox,
  CTAButton,
  LocationBox,
  Socials,
  SocialBtn,
} from "./Contact.style";

const Contact = () => {
  const PHONE_MAIN = "(83) 98856-0234";
  const PHONE_SECOND = "(83) 98600-5623";
  const WHATSAPP_NUMBER = "5583988560234"; 
  const EMAIL = "comercial@animabrindes.com.br";
  const ADDRESS = "R. Teodósio de Oliveira Lêdo – Centro, Campina Grande – PB, 58400-081";
  const WHATSAPP_MESSAGE = "Olá! Quero tirar uma dúvida.";

  return (
    <Page aria-labelledby="contato-titulo">
      <Grid>
        {/* Informações de contato */}
        <Card>
          <CardTitle id="contato-titulo">Informações de contato</CardTitle>
          <Line />
          <div>
            <Row>
              <IconWrap><FaPhoneAlt /></IconWrap>
              <div>
                <Label>Telefone</Label>
                <Value>{PHONE_MAIN}</Value>
                <Value>{PHONE_SECOND}</Value>
              </div>
            </Row>

            <Row>
              <IconWrap><FaEnvelope /></IconWrap>
              <div>
                <Label>E-mail</Label>
                <Value>{EMAIL}</Value>
              </div>
            </Row>

            <Row>
              <IconWrap><FaClock /></IconWrap>
              <div>
                <Label>Atendimento</Label>
                <Value>Segunda à sábado: 8h às 18h</Value>
              </div>
            </Row>
          </div>
        </Card>

        {/* WhatsApp + Localização */}
        <Card>
          <CardTitle>
            Fale conosco pelo <span className="highlight">WhatsApp</span>
          </CardTitle>
          <p className="muted">
            Atendimento personalizado em tempo real. Tire suas dúvidas e faça sua
            reserva de mesa rapidamente.
          </p>

          <CTABox>
            <CTAButton
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              Iniciar conversa
            </CTAButton>
          </CTABox>

          <LocationBox>
            <h4>Nossa localização</h4>
            <Row>
              <IconWrap><FaMapMarkerAlt /></IconWrap>
              <Value>{ADDRESS}</Value>
            </Row>
          </LocationBox>
        </Card>

        {/* Redes sociais */}
        <Card className="social">
          <CardTitle>Redes sociais</CardTitle>
          <Line />
          <Socials>
            <SocialBtn
              href="https://www.instagram.com/anima.brindes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
              Instagram
            </SocialBtn>
          </Socials>
        </Card>
      </Grid>
    </Page>
  );
};

export default Contact;