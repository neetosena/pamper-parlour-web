import Title from "./Title";
import { packagesInfo, packages } from "../utils/data";

import PackageCard from "./PackageCard";

const Packages = () => {
  //------- All this function is for Mobile ---------//
  //--------------------------------------------------//

  //--------------------------------------------------//

  return (
    // Packages top information
    <div className="py-[4em] px-[2em] bg-light-pink md:py-[8em] ">
      <Title title="Packages" />
      <div className="mt-[4em] flex  justify-between md:max-w-[1000px] md:mx-[auto] ">
        {packagesInfo.map((packageInfo) => {
          return (
            <div key={packageInfo.id} className="basis-[40%] md:basis-[40%]">
              <h4 className="mb-[0.5em]">{packageInfo.title}</h4>
              <ul className="ml-[1em] md:flex md:flex-wrap gap-x-[2em]">
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
      <div className="mt-[2em] md:max-w-[1000px] md:mx-[auto]">
        <h4 className="mb-[0.5em]">Join Party</h4>
        <p>
          with 2 Birthday Girls additional,
          <strong> €20 across all packages</strong>
        </p>
      </div>
      {/* Card Container / Package card with touch functionality */}
      <div className="flex flex-col gap-[2em] mt-[3em] md:max-w-[1000px] md:mx-[auto] md:grid md:grid-cols-2 md:items-baseline lg:grid-cols-4 ">
        {packages.map((pack) => {
          return <PackageCard key={pack.id} packages={pack} />;
        })}
      </div>
    </div>
  );
};
export default Packages;
