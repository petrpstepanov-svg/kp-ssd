import Hero from "@/components/Hero";
import PilotProject from "@/components/PilotProject";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PilotProject />
      <Results />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Стоимость"
          description="Полный комплекс интернет-маркетинга для двух направлений: эвакуация и аварийный комиссар."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="Результаты пилотного проекта"
          description="Реальные цифры тестовой кампании за 10 дней."
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
