import { about } from "../utils/data";
import BallonsMobile from "../images/ballons-mobile.svg";
import BallonsDesktop from "../images/ballons-desktop.svg";
import Title from "./Title";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="scroll-mt-[105.5px] relative py-[4em] px-[2em] bg-light-pink z-[0] md:py-[8em]"
    >
      {/* Ballons just for mobile */}
      <img
        src={BallonsMobile}
        alt="background-ballons"
        className="absolute top-0 left-0 w-[100vh] h-auto z-[-1] opacity-[0.8] md:hidden"
      />
      {/* Ballons just for tablet and desktop */}
      <img
        src={BallonsDesktop}
        alt="background-ballons"
        className="hidden md:block md:absolute md:top-[50%] md:translate-y-[-50%] md:left-[50%] md:translate-x-[-50%] md:w-[100vw] md:h-auto md:z-[-1] md:opacity-[0.6] xl:top-[50%] xl:w-[70%] xl:h-[80vh] 2xl:max-h-[700px]"
      />
      <Title title={about.title} />
      {/* Inner Container for image + paragraph */}
      <div className="md:flex md:max-w-[1000px] md:gap-[3em] md:mt-[3em] md:mx-auto">
        {/* Candy Cart Image */}
        <div className="w-[100%] my-[2em] rounded-[0.5em] overflow-hidden md:basis-[50%] md:h-[25em] md:m-0 md:bg-pink">
          <img
            src={about.img}
            alt="Candy Cart"
            className="md:object-cover md:h-[100%]"
          />
        </div>
        {/* Paragraphs */}
        <div className="md:basis-[50%]">
          {about.text.map((t, index) => {
            return (
              <p key={index} className="pb-[1em] font-light">
                {t}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
