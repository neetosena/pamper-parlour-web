import { useState } from "react";
import Title from "./Title";
import { packagesInfo, packages } from "../utils/data";

import PackageCard from "./PackageCard";
import Paginate from "./Paginate";

const Packages = () => {
  const [index, setIndex] = useState(0);

  const length = packages.length;

  //------- All this function is for Mobile ---------//
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
    if (index >= packages.length - 1) {
      console.log("here", packages.length);
      setIndex(packages.length - 1);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    // Packages top information
    <div className="py-[4em] px-[2em] bg-light-pink ">
      <Title title="Packages" />
      <div className="mt-[4em] flex justify-between">
        {packagesInfo.map((packageInfo) => {
          return (
            <div key={packageInfo.id}>
              <h4>{packageInfo.title}</h4>
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
        <h4>Join Party</h4>
        <p>
          with 2 Birthday Girls additional,
          <strong> €20 across all packages</strong>
        </p>
      </div>
      {/* Card Container */}
      <div
        style={{
          width: `calc(${length * 100}% + (${length - 1} * 1em)`,
          transform: `translateX(calc(-${index * 25}% - (${index * 0.5}em)))`,
        }}
        className="relative mt-[3em] w-[100vw] flex gap-[2em] items-start transition-transform duration-500 ease-in-out "
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
