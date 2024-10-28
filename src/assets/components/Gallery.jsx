import { useState, useEffect } from "react";
import Title from "./Title";
import { gallery, pagination } from "../utils/data";
import Paginate from "./Paginate";
import SlideShow from "./SlideShow";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [changeColor, setChangeColor] = useState(false);
  const [images, setImages] = useState(pagination(gallery, 6));
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [showSlide, setShowSlide] = useState({});

  const handleClick = (i, slideShowKey, index) => {
    setCurrentIndex(i);
    setShowSlide({ [slideShowKey]: true });
    console.log(showSlide);
  };

  const debouce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Adjust index based on the screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIndex(0); //reset the index when switching between mobile and desktop
    };
    const debounceResize = debouce(handleResize, 100);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  //------- All this function is for Desktop ---------//
  //--------------------------------------------------//
  const handleClickPage = (index_) => {
    setIndex(index_);
  };

  const handleClickPageBack = () => {
    if (index <= 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };

  const handleClickPageForward = () => {
    if (index >= images.length - 1) {
      console.log("here", images.length);
      setIndex(images.length - 1);
    } else {
      setIndex(index + 1);
    }
  };

  //--------------------------------------------------//

  //------- All this function is for Mobile ---------//
  //-------------------------------------------------//

  const handleBulletClick = (id) => {
    setIndex(id);
    if (id === index) {
      setChangeColor(!changeColor);
    }
  };

  const handleForwardClick = () => {
    if (index >= gallery.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleBackClick = () => {
    if (index <= 0) {
      setIndex(gallery.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  //-------------------------------------------------//

  return (
    <section
      id="gallery"
      className="scroll-mt-[105.5px] py-[4em] bg-middle-pink xl:py-[8em]"
    >
      <Title title="Gallery" />

      {/* ----------------Gallery for Tablet and Desktop---------------- */}
      {!isMobile && (
        <div className="hidden md:block p-[2em] xl:max-w-[1000px] xl:mx-auto xl:pt-[4em]">
          <div className="grid grid-cols-3 grid-rows-2 gap-[2em]">
            {images[index].map((image) => {
              return (
                <div
                  key={image.id}
                  className="h-[20em] rounded-[1.5em] overflow-hidden"
                >
                  <img
                    src={image.img}
                    alt={image.alt}
                    className="max-w-[100%] w-[100%] h-[100%] object-cover"
                    onClick={(i) => handleClick(i, image.id, index)}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-[3em] flex justify-center">
            <Paginate
              pages={images}
              handleClickPage={handleClickPage}
              handleClickPageBack={handleClickPageBack}
              handleClickPageForward={handleClickPageForward}
            />
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}

      {/* -----------------------Gallery for mobile----------------------- */}
      {isMobile && (
        <div className="md:hidden">
          <div className="relative h-[27em] mt-[2em] mx-[2em] rounded-[1.5em] overflow-hidden">
            {/* Arrow left for mobile */}
            <div
              className="absolute top-[50%] translate-y-[-50%] lelf-[0] text-white text-[2rem]"
              onClick={handleBackClick}
            >
              <IoIosArrowBack />
            </div>

            {/* Arrow right for mobile  */}
            <div
              className="absolute top-[50%] translate-y-[-50%] right-[0] text-white text-[2rem]"
              onClick={handleForwardClick}
            >
              <IoIosArrowForward />
            </div>
            {/* Gallery images */}
            <img
              className="w-[100%] h-[100%] object-cover transition-transform duration-500 ease-in-out"
              loading="lazy"
              key={gallery[index].id}
              src={gallery[index].img}
              alt={gallery[index].alt}
            />
          </div>
          {/* Bullets for the gallery */}
          <div className="m-auto mt-[1em] w-[12em] flex justify-between">
            {gallery.map((_, i) => {
              return (
                <span
                  key={i}
                  className={`inline-block ${i === index ? "bg-pink" : "bg-light-pink"}  rounded-[50%] w-[.7em] h-[.7em]`}
                  onClick={() => handleBulletClick(i)}
                ></span>
              );
            })}
          </div>
        </div>
      )}

      {/* <Wrapper>
        <SlideShow
          image={gallery[index]}
          setShowSlide={setShowSlide}
          index={currentIndex}
          setIndex={setCurrentIndex}
          totalImages={gallery.length}
          slideShowKey={Object.keys(showSlide)}
        />
      </Wrapper> */}
    </section>
  );
};
export default Gallery;

const Wrapper = styled.div`
  //style the div that contains the SlideShow Component

  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  transform: translate(-50%, -50%);
  z-index: 2;
`;
