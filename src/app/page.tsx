import Hero from "@/components/Hero";
import PilotProject from "@/components/PilotProject";
import Results from "@/components/Results";
import WhatYouGet from "@/components/WhatYouGet";
import Forecast from "@/components/Forecast";
import Testimonials from "@/components/Testimonials";
import PricingNew from "@/components/PricingNew";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { pricingData } from "@/data/pricingNew";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <PilotProject />
      <Results />
      <WhatYouGet />
      <Forecast />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Стоимость"
          description={pricingData.subheading}
        >
          <PricingNew />
        </Section>

        <AboutUs />

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
