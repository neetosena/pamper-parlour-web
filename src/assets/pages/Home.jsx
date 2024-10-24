import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Packages from "../components/Packages";

const Home = () => {
  return (
    <section className="relative overflow-hidden">
      <Nav />
      <Hero />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <Packages />
    </section>
  );
};
export default Home;
