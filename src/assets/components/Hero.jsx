import { Link } from "react-router-dom";
import { hero } from "../utils/data";

import BackgroundMobile from "../images/background-hero-mobile-2.jpg";
import BackgroundDesktop from "../images/background-hero-desktop.jpg";

const Hero = () => {
  return (
    <section className="min-h-full md:min-h-auto">
      {/* Background Pink image for mobile and tablet */}
      <img
        className="absolute top-17 left-0 -z-10  w-full object-cover md:hidden lg:hidden "
        src={BackgroundMobile}
        alt="background-hero"
      />
      {/* Background pink for large screen */}
      <img
        className="hidden md:block lg:block md:absolute md:top-17 md:left-0 md:-z-10 md:min-h-[80vh] md:w-full md:object-cover xl:min-h-[50vh] xl:h-[90vh]  "
        src={BackgroundDesktop}
        alt="background-hero"
      />
      {/* Hero message using the custom text in the util folder for now it just one banner */}
      {hero.map((h) => {
        return (
          <div
            key={h.id}
            className="flex flex-col pt-16 justify-center min-h-[calc(100vh-4.25rem)] text-center md:min-h-[calc(70vh-4.25rem)] md:flex-row md:items-center lg:max-w-[1600px] lg:m-auto"
          >
            <div className="px-12 lg:px-12 xl:pl-[17rem]">
              <span className="block mb-6 font-manuscript text-3xl/[1.5] text-pink ">
                {h.title}
              </span>
              <p className="md:max-w-[22em] md:m-auto lg:max-w-[22em] lg:m-auto">
                {h.text}
              </p>
              <Link to="" className="cta mt-4">
                BOOK NOW
              </Link>
            </div>
            {/* Photo on the right for the larger screen */}
            <img
              src={h.img}
              alt="photos"
              className="mt-8 max-w-30rem w-full mx-auto lg:max-w-41rem lg:mt-0 "
            />
          </div>
        );
      })}
    </section>
  );
};
export default Hero;
