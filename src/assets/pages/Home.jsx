import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Packages from "../components/Packages";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { useLocation } from "react-router-dom";
import { scrollToSection } from "../utils/data";
import { useEffect } from "react";
import Invitation from "../components/Invitation";
import FadeInSection from "../components/FadeInSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToSection(location);
  }, [location, scrollToSection]);

  return (
    <section className="relative overflow-hidden">
      <Nav />
      <Hero />
      <FadeInSection>
        <AboutUs />
      </FadeInSection>
      <FadeInSection>
        <Gallery />
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <FadeInSection>
        <Invitation />
      </FadeInSection>
      <FadeInSection>
        <Packages />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <Footer />
    </section>
  );
};
export default Home;
