import {
  AboutSection,
  Header,
  Headline,
  Lead,
  SubText,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDesc,
} from "./About.style";
import PopUp from "../../components/pop-up/PopUp.jsx";

const About = () => (
  <AboutSection aria-labelledby="sobre-nos-titulo">
    <Header>
      <Headline id="sobre-nos-titulo">Sobre a Anima Brindes</Headline>

      <Lead>
        A <span className="highlight">Anima Brindes</span> nasceu em 2023 com um propósito claro:
        marcar momentos, colocando em prática ideias e sonhos por meio de brindes de excelente qualidade.
      </Lead>

      <SubText>
        Somos apaixonados por design, atentos à funcionalidade e comprometidos com a sustentabilidade,
        porque acreditamos que um bom brinde precisa encantar, durar e respeitar o mundo à nossa volta.
      </SubText>
      <SubText>
        Atendemos empresas e eventos de todos os tamanhos e lugares do Brasil, oferecendo soluções
        personalizadas que refletem a identidade de cada marca. Nossa missão é criar experiências que
        ficam eternizadas na memória, transformando conceitos em produtos que geram conexão.
      </SubText>
      <SubText>
        Vamos juntos transformar a sua ideia em algo único?
      </SubText>
    </Header>

    <FeaturesGrid role="list" aria-label="Nossos diferenciais">
      <FeatureCard role="listitem">
        <FeatureIcon aria-hidden>💡</FeatureIcon>
        <FeatureTitle>Inovação Constante</FeatureTitle>
        <FeatureDesc>
          Soluções criativas e eficientes, sempre atualizadas com o que funciona no mercado.
        </FeatureDesc>
      </FeatureCard>

      <FeatureCard role="listitem">
        <FeatureIcon aria-hidden>✨</FeatureIcon>
        <FeatureTitle>Qualidade Garantida</FeatureTitle>
        <FeatureDesc>
          Acabamento caprichado e controle de qualidade em cada etapa da produção.
        </FeatureDesc>
      </FeatureCard>

      <FeatureCard role="listitem">
        <FeatureIcon aria-hidden>👥</FeatureIcon>
        <FeatureTitle>Equipe Especializada</FeatureTitle>
        <FeatureDesc>
          Profissionais experientes e suporte próximo para tirar dúvidas e agilizar decisões.
        </FeatureDesc>
      </FeatureCard>

      <FeatureCard role="listitem">
        <FeatureIcon aria-hidden>🚀</FeatureIcon>
        <FeatureTitle>Suporte Completo</FeatureTitle>
        <FeatureDesc>
          Acompanhamento do início ao fim: arte, aprovação e logística em todo o Brasil.
        </FeatureDesc>
      </FeatureCard>
    </FeaturesGrid>

    <PopUp />
  </AboutSection>
);

export default About;