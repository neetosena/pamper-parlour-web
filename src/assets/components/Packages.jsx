import { useRef, useState } from "react";
import Title from "./Title";
import { packagesInfo, packages } from "../utils/data";

import PackageCard from "./PackageCard";
import Paginate from "./Paginate";

const Packages = () => {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  //   const [currentTranslate, setCurrentTranslate] = useState(0);
  //   const [prevTranslate, setPrevTranslate] = useState(0);

  const containerRef = useRef(null);

  const length = packages.length;
  const screenSize = window.innerWidth;

  //------- All this function is for Mobile ---------//
  //--------------------------------------------------//

  // Handle touch start (user puts finger on the screen)
  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX); // Record initial touch position
  };

  // Handle touch move (user moves finger on the screen)
  const handleTouchMove = (event) => {
    const touchX = event.touches[0].clientX; // Current touch position
    const currentDeltaX = touchX - startX; // Calculate difference from starting point

    setDeltaX(currentDeltaX);

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(calc(-${index * screenSize}px + ${currentDeltaX}px))`;
    }

    // if (deltaX < 0) {
    //   if (currentTranslate < 0) {
    //     setCurrentTranslate(0);
    //   } else {
    //     // Move the container by the delta amount
    //     setCurrentTranslate(prevTranslate - screenSize + 50);
    //   }

    //   // Apply movement to the container
    //   if (containerRef.current) {
    //     containerRef.current.style.transform = `translateX(calc(${currentTranslate}px))`;
    //   }
    // } else {
    //   if (currentTranslate < -screenSize * (length - 1)) {
    //     // setCurrentTranslate(0);
    //     console.log("here");
    //   } else {
    //     // Move the container by the delta amount
    //     setCurrentTranslate(prevTranslate + screenSize - 50);
    //   }

    //   // Apply movement to the container
    //   if (containerRef.current) {
    //     containerRef.current.style.transform = `translateX(calc(${currentTranslate}px))`;
    //   }
    //   console.log(
    //     "Current: ",
    //     currentTranslate,
    //     "screen: ",
    //     screenSize * (length - 1)
    //   );
    // }
  };

  // Handle touch end (user lifts finger from the screen)
  const handleTouchEnd = () => {
    // Calculate the threshold for swipe (20% of screen width)
    const threshold = screenSize * 0.2;

    if (deltaX > threshold && index > 0) {
      // Swipe right (previous card)
      setIndex((prevIndex) => prevIndex - 1);
    } else if (deltaX < -threshold && index < length - 1) {
      // Swipe left (next card)
      setIndex((prevIndex) => prevIndex + 1);
    }

    // Reset the container translation to snap to the nearest slide
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${index * screenSize}px)`;
    }

    // Reset delta
    setDeltaX(0);

    // setPrevTranslate(currentTranslate); // Save the last movement amount
  };

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
    if (index >= packages.length - 1) {
      console.log("here", packages.length);
      setIndex(packages.length - 1);
    } else {
      setIndex(index + 1);
    }
  };
  //--------------------------------------------------//

  return (
    // Packages top information
    <div className="py-[4em] px-[2em] bg-light-pink ">
      <Title title="Packages" />
      <div className="mt-[4em] flex justify-between">
        {packagesInfo.map((packageInfo) => {
          return (
            <div key={packageInfo.id} className="basis-[40%]">
              <h4 className="mb-[0.5em]">{packageInfo.title}</h4>
              <ul className="ml-[1em]">
                {packageInfo.text.map((text, index) => {
                  return (
                    <li key={index} className="packages-info">
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {/* Join Party information */}
      <div className="mt-[2em]">
        <h4 className="mb-[0.5em]">Join Party</h4>
        <p>
          with 2 Birthday Girls additional,
          <strong> €20 across all packages</strong>
        </p>
      </div>
      {/* Card Container / Package card with touch functionality */}
      <div
        ref={containerRef}
        className="relative mt-[3em] w-[100vw] flex gap-[1em] items-start transition-transform duration-500 ease-in-out "
        style={{
          width: `calc(${length * 100}% + (${length - 1} * 1em)`,
          transform: `translateX(calc(-${index * 25}% - (${index * 0.5}em)))`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {packages.map((pack) => {
          return <PackageCard key={pack.id} packages={pack} />;
        })}
      </div>
      <Paginate
        pages={packages}
        handleClickPage={handleClickPage}
        handleClickPageBack={handleClickPageBack}
        handleClickPageForward={handleClickPageForward}
      />
    </div>
  );
};
export default Packages;
