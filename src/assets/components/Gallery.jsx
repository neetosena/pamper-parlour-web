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
  const [indexDesktop, setIndexDesktop] = useState(0);
  const [images, setImages] = useState(pagination(gallery, 6));
  const [changeColor, setChangeColor] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [showSlide, setShowSlide] = useState(false);

  const handleClose = () => {
    setShowSlide(false);
  };

  // Adjust index based on the screen size
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [isMobile]);

  //------- All this function is for Desktop ---------//
  //--------------------------------------------------//
  const handleClickPage = (index_) => {
    setIndexDesktop(index_);
  };

  const handleClickPageBack = () => {
    if (indexDesktop <= 0) {
      setIndexDesktop(0);
    } else {
      setIndexDesktop(indexDesktop - 1);
    }
  };

  const handleClickPageForward = () => {
    if (indexDesktop >= images.length - 1) {
      console.log("here", images.length);
      setIndexDesktop(images.length - 1);
    } else {
      setIndexDesktop(indexDesktop + 1);
    }
  };

  const handleClickImage = (index_) => {
    setIndex(index_);
    setShowSlide(true);
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
        <div className=" md:block py-[2em] xl:max-w-[1000px] xl:mx-auto xl:pt-[4em]">
          <div className="grid grid-cols-3 grid-rows-2 gap-[3em]">
            {images[indexDesktop].map((image) => {
              return (
                <div
                  key={image.id}
                  className="h-[15em] rounded-[0.5em]  transition-shadow duration-500 ease-in-out hover:shadow-2xl cursor-pointer overflow-hidden "
                  onClick={() => handleClickImage(image.id)}
                >
                  <img
                    src={image.img}
                    alt={image.alt}
                    className="max-w-[100%] w-[100%] h-[100%] object-cover transition-transform duration-[1s] ease-in-out hover:scale-[1.3]"
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
          <div className="relative h-[27em] mt-[2em] mx-[2em] rounded-[0.5em] overflow-hidden ">
            {/* Arrow left for mobile */}
            <div
              className="absolute top-[50%] translate-y-[-50%] lelf-[0] text-white text-[2rem] z-10"
              onClick={handleBackClick}
            >
              <IoIosArrowBack />
            </div>

            {/* Arrow right for mobile  */}
            <div
              className="absolute top-[50%] translate-y-[-50%] right-[0] text-white text-[2rem] z-10"
              onClick={handleForwardClick}
            >
              <IoIosArrowForward />
            </div>
            {/* Gallery images */}

            {gallery.map((img, i) => {
              return (
                <img
                  style={{
                    opacity: `${i === index ? "1" : "0"}`,
                  }}
                  className="absolute top-0 left-0 w-[100%] h-[100%] object-cover opacity-0 transition-opacity duration-500 ease-in-out"
                  loading="lazy"
                  key={img.id}
                  src={img.img}
                  alt={img.alt}
                  onClick={() => setShowSlide(true)}
                />
              );
            })}
          </div>
          {/* Bullets for the gallery */}
          <div className="m-auto mt-[1em] w-[12em] flex justify-between">
            {gallery.map((_, i) => {
              return (
                <span
                  key={i}
                  className={`inline-block ${i === index ? "bg-pink" : "bg-light-pink"}  rounded-[50%] w-[.7em] h-[.7em] cursor-pointer`}
                  onClick={() => handleBulletClick(i)}
                ></span>
              );
            })}
          </div>
        </div>
      )}
      {showSlide && (
        <Wrapper>
          <SlideShow
            image={gallery[index].img}
            setIndex={setIndex}
            totalImages={gallery.length}
            handleClose={handleClose}
          />
        </Wrapper>
      )}
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
  z-index: 999;
`;
