import { useState } from "react";
import Title from "./Title";
import { testimonials } from "../utils/data";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { IoStar } from "react-icons/io5";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [changeColor, setChangeColor] = useState(false);

  const length = testimonials.length;

  const handleBulletClick = (id) => {
    setIndex(id);
    if (id === index) {
      setChangeColor(!changeColor);
    }
  };

  return (
    <div className=" py-[4em] px-[2em] bg-lighter-pink ">
      <div className="mb-[4em]">
        <Title title="Testimonials" />
      </div>
      {/* Testimonial Card Container */}
      <div
        style={{ transform: `translateX(calc(-${index * 25}%))` }}
        className={`flex w-[${length * 100}%] items-center transition-transform duration-500 ease-in-out`}
      >
        {testimonials.map((t) => {
          return (
            // Testimonials Card
            <div
              key={t.id}
              className={`relative basis-[100%] p-[2em] pt-[3em] text-center bg-white border-solid border-[1px]  border-red-800 rounded-[1.5em]`}
            >
              {/* Quote */}
              <span className="absolute top-[-9%] left-[50%] translate-x-[-50%] p-[.2em] text-[3.5em] bg-white rounded-[50%] border-[0.1em] border-lighter-pink">
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
      <div className="m-auto mt-[1em] w-[12em] flex justify-between">
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
  );
};
export default Testimonials;
