import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Packages from "../components/Packages";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
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
