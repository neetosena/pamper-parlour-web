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
import { useState, useEffect } from "react";
import Invitation from "../components/Invitation";
import FadeInSection from "../components/FadeInSection";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    scrollToSection(location);
  }, [location, scrollToSection]);

  const handleVisibilityChange = (id) => {
    setActiveSection(id);
  };

  return (
    <section className="relative overflow-hidden">
      <Nav activeSection={activeSection} />
      <Hero />

      <FadeInSection id="about-us" onVisible={handleVisibilityChange}>
        <AboutUs />
      </FadeInSection>

      <FadeInSection id="gallery" onVisible={handleVisibilityChange}>
        <Gallery />
      </FadeInSection>

      <FadeInSection id="testimonials" onVisible={handleVisibilityChange}>
        <Testimonials />
      </FadeInSection>

      <Invitation />

      <FadeInSection id="packages" onVisible={handleVisibilityChange}>
        <Packages />
      </FadeInSection>

      <FadeInSection id="contact" onVisible={handleVisibilityChange}>
        <Contact />
      </FadeInSection>

      <Footer />
    </section>
  );
};
export default Home;
