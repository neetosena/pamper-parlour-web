import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <section className="relative overflow-hidden">
      <Nav />
      <Hero />
      <AboutUs />
      <Gallery />
    </section>
  );
};
export default Home;
