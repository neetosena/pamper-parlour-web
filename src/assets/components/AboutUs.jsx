import { about } from "../utils/data";
import BallonsMobile from "../images/ballons-mobile.svg";
import Title from "./Title";

const AboutUs = () => {
  return (
    <section className="relative py-[4em] px-[2em] bg-light-pink z-[0]">
      <img
        src={BallonsMobile}
        alt="background-ballons"
        className="absolute top-0 left-0 w-[100vh] h-auto z-[-1] opacity-[0.8]"
      />
      <Title title={about.title} />
      <div>
        <div className="w-[100%] my-[2em] rounded-[1.5em] overflow-hidden">
          <img src={about.img} alt="Candy Cart" />
        </div>
        <div>
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
