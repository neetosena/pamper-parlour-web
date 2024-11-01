import { useEffect, useState } from "react";
import Title from "./Title";
import { pagination, testimonials } from "../utils/data";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { IoStar } from "react-icons/io5";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [changeColor, setChangeColor] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [touchStart, setTouchStart] = useState(0);
  const [currentTouch, setCurrentTouch] = useState(0);

  const length = testimonials.length;

  // Adjust index based on the screen size
  useEffect(() => {
    if (index < length) {
      setIndex(index); //reset the index when switching between mobile and desktop
    } else {
      setIndex(0);
    }
  }, [isMobile]);

  //------- All this function is for Dektop ---------//
  //--------------------------------------------------//

  const handleBulletClickDesktop = (i) => {
    setIndex(i);
    setChangeColor(!changeColor);
  };

  //--------------------------------------------------//

  //------- All this function is for Mobile ---------//
  //--------------------------------------------------//

  const handleBulletClick = (id) => {
    setIndex(id);
    if (id === index) {
      setChangeColor(!changeColor);
    }
  };

  const handleTouchStart = (e) => {
    // e.preventDefault();
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    // e.preventDefault();

    setCurrentTouch(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    // e.preventDefault();
    if (currentTouch > touchStart + 30 && index < length - 1) {
      setIndex(index + 1);
      console.log(index);
    } else if (currentTouch < touchStart - 30 && index > 0) {
      setIndex(index - 1);
    }
  };

  //   useEffect(() => {
  //     console.log(toucheStart);
  //   }, [toucheStart]);

  //--------------------------------------------------//

  return (
    <div
      id="testimonials"
      className=" scroll-mt-[105.5px] py-[4em] px-[2em] bg-lighter-pink md:py-[8em] "
    >
      <div className="mb-[4em] md:mb-[8em]">
        <Title title="Testimonials" />
      </div>
      {/* ----------------------------Render only on Mobile------------------------ */}
      {/* Testimonial Card Container */}
      {isMobile && (
        <div className="relative">
          <div
            style={{
              width: `calc(${length * 100}% + (${length - 1} * 2em)`,
              transform: `translateX(calc(-${index * 25}% - (${index * 0.5}em)))`,
            }}
            className={`flex items-center gap-[2em] transition-transform duration-500 ease-in-out`}
          >
            {testimonials.map((t) => {
              return (
                // Testimonials Card
                <div
                  key={t.id}
                  className={`relative basis-[100%] flex flex-col justify-center min-h-[25em] p-[2em] pt-[3em] text-center bg-white border-solid border-[1px]  border-white rounded-[0.5em]`}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Quote */}
                  <span className="absolute top-[-13%] left-[50%] translate-x-[-50%] p-[.2em] text-[3.5em] bg-white rounded-[50%] border-[0.1em] border-lighter-pink text-gold">
                    <BiSolidQuoteAltLeft />
                  </span>
                  <p>{t.message}</p>

                  {/* Star Icon 4 stars */}
                  <div className="m-auto my-[0.5em] flex w-[80%] justify-center gap-[1em] text-[1.5rem] text-gold">
                    {Array.from({ length: t.rating }, (_, index) => {
                      return (
                        <span key={index}>
                          <IoStar />
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-pink font-bold ">{t.name}</p>
                </div>
              );
            })}
          </div>
          {/* Arrow left for mobile */}
          {/* <div
            className="absolute top-[50%] translate-y-[-50%] lelf-[0] text-middle-pink text-[2rem] z-20"
            onClick={handleBackClick}
          >
            <IoIosArrowBack />
          </div> */}

          {/* Arrow right for mobile  */}
          {/* <div
            className="absolute top-[50%] translate-y-[-50%] right-[76%] text-middle-pink text-[2rem] z-20"
            onClick={handleForwardClick}
          >
            <IoIosArrowForward />
          </div> */}
          {/* Bullet point */}
          <div className="m-auto mt-[2em] w-[12em] flex justify-between">
            {testimonials.map((_, i) => {
              return (
                <span
                  key={i}
                  className={`inline-block ${i === index ? "bg-pink" : "bg-light-pink"}  rounded-[50%] w-[.7em] h-[.7em] `}
                  onClick={() => handleBulletClick(i)}
                ></span>
              );
            })}
          </div>
        </div>
      )}
      {/* ---------------------------------------------------- */}
      {/* ----------------------------Render only on Desktop------------------------ */}
      {/* Testimonial Card Container */}
      {!isMobile && (
        <div className="md:mx-auto md:max-w-[1000px]">
          <div className="flex gap-[4em]">
            {pagination(testimonials, 2)[index].map((t) => {
              return (
                // Testimonials Card
                <div
                  key={t.id}
                  className={`relative basis-[100%] flex flex-col justify-center min-h-[25em] p-[2em] pt-[3em] text-center bg-white border-solid border-[1px]  border-white rounded-[0.5em] transition-opacity ease-in-out duration-500`}
                >
                  {/* Quote */}
                  <span className="absolute top-[-13%] left-[50%] translate-x-[-50%] p-[.2em] text-[3.5em] bg-white rounded-[50%] border-[0.1em] border-lighter-pink text-gold">
                    <BiSolidQuoteAltLeft />
                  </span>
                  <p>{t.message}</p>

                  {/* Star Icon 4 stars */}
                  <div className="m-auto my-[0.5em] flex w-[80%] justify-center gap-[1em] text-[1.5rem] text-gold">
                    {Array.from({ length: t.rating }, (_, index) => {
                      return (
                        <span key={index}>
                          <IoStar />
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-pink font-bold ">{t.name}</p>
                </div>
              );
            })}
          </div>
          {/* Bullet point */}
          <div className="m-auto mt-[4em] w-[3em] flex justify-between">
            {pagination(testimonials, 2).map((_, i) => {
              return (
                <span
                  key={i}
                  className={`inline-block ${i === index ? "bg-pink" : "bg-light-pink"}  rounded-[50%] w-[.7em] h-[.7em] `}
                  onClick={() => handleBulletClickDesktop(i)}
                ></span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Testimonials;
