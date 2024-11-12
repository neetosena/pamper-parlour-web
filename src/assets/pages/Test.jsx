import styled from "styled-components";
import Nav from "../components/Nav";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../utils/data";

const Test = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState("");

  //   const callbackFunction = (entries) => {
  //     const [entry] = entries;
  //     if (entry.isIntersecting) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  const options = {
    root: null,
    rootMargin: "-100px",
    threshold: 0,
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);
  const packagesRef = useRef(null);
  const contactRef = useRef(null);

  const allRefs = [
    homeRef,
    aboutRef,
    galleryRef,
    testimonialsRef,
    packagesRef,
    contactRef,
  ];

  const location = useLocation();

  useEffect(() => {
    scrollToSection(location);
  }, [location, scrollToSection]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          entry.target.classList.add("active2");
        } else {
          setActive("");
          entry.target.classList.remove("active2");
        }
      });
    }, options);

    allRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
        // setActive(ref.current);
      } else {
        // setActive("");
      }
    });

    return () => observer.disconnect();
  }, []);

  console.log(isVisible);
  console.log("ACTIVE", active);

  return (
    <Wrapper>
      <Nav activeSection={active} />
      <div className="innner-wrapper">
        <section ref={homeRef} className={`section`} id="home">
          Home
        </section>
        <section ref={aboutRef} className={`section`} id="about-us">
          About
        </section>
        <section ref={galleryRef} className={`section`} id="gallery">
          Gallery
        </section>
        <section ref={testimonialsRef} className={`section`} id="testimonials">
          Testimonials
        </section>
        <section ref={packagesRef} className={`section`} id="packages">
          Packages
        </section>
        <section ref={contactRef} className={`section`} id="contact">
          Contact
        </section>
      </div>
    </Wrapper>
  );
};
export default Test;

const Wrapper = styled.div`
  .innner-wrapper {
    margin-top: 105.5px;
  }

  .section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid magenta;
    transition: all 1s ease-in-out;
  }

  .active2 {
    color: var(--pink);
  }
`;
