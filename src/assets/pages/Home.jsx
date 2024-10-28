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

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToSection(location);
  }, [location, scrollToSection]);

  return (
    <section className="relative overflow-hidden">
      <Nav />
      <Hero />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <Packages />
      <Contact />
      <Footer />
    </section>
  );
};
export default Home;
