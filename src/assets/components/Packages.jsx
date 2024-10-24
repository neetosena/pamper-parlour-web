import Title from "./Title";
import { packagesInfo, packages } from "../utils/data";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Packages = () => {
  return (
    // Packages top information
    <div className="py-[4em] px-[2em] bg-light-pink overflow-scroll">
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
      <div
        style={{ width: "400%" }}
        className="mt-[3em] w-[100vw] flex gap-[2em] items-start "
      >
        {/* Card container */}
        {packages.map((pack) => {
          return (
            // Card inner container
            <div
              key={pack.id}
              className="flex flex-col justify-center bg-white rounded-[2em] overflow-hidden"
            >
              <p className="p-[1em] bg-pink text-center text-white font-semibold ">
                {pack.title}
              </p>
              <div className="py-[1em] text-center bg-lighter-pink">
                <p className="text-[2.2rem] font-bold text-pink">
                  {pack.price}
                </p>
                <span className="block">{pack.info[0]}</span>

                <span className="mt-[-1.2em] block font-bold">
                  {pack.info[1]}
                </span>
              </div>
              <div>
                {pack.items.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`p-[1em] flex text-left ${index % 2 === 0 ? "odd:bg-transparent" : "even:bg-lighter-pink"}`}
                    >
                      <div className="basis-[20%] text-[1.5rem] text-green">
                        <FaCheck />
                      </div>
                      <p className="basis-[80%]">{item}</p>
                    </div>
                  );
                })}
              </div>
              <button
                className="btn-enquire w-[max-content] my-[2em] self-center "
                type="button"
              >
                ENQUIRE NOW
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Packages;
