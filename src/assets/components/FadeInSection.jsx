import { useState, useEffect, useRef } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //if the element is in view, set "isVisible" to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); //stop observing once visible
        }
      },
      {
        threshold: 0.1, //trigger when 10% of the element is visible
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};
export default FadeInSection;
