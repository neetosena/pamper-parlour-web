import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackageCard = ({ packages, handleEnquireClick }) => {
  return (
    /* Card inner container */
    <div
      key={packages.id}
      className="flex flex-col justify-center bg-white rounded-[2em] overflow-hidden"
    >
      {/* Title */}
      <p
        style={{ background: `${packages.primaryColor}` }}
        className={`p-[1em] text-center text-white font-semibold`}
      >
        {packages.title}
        {packages.info2 && (
          <span className="inline-block text-[0.9rem] font-normal leading-[1.5] mt-[0.3em]">
            {packages.info2}
          </span>
        )}
      </p>
      {/* Packages price */}
      <div
        style={{ background: packages.secondaryColor }}
        className="py-[1em] text-center "
      >
        <p
          style={{ color: `${packages.primaryColor}` }}
          className={`text-[2.2rem] font-bold`}
        >
          {packages.price}
        </p>
        <span className="block mt-[-1em]">{packages.info[0]}</span>

        <span className="mt-[-1.2em] block font-bold">{packages.info[1]}</span>
      </div>
      {/* Packages Items */}
      <div>
        {packages.items.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                background:
                  index % 2 === 0 ? "transparent" : packages.secondaryColor,
              }}
              className={`py-[0.5em] px-[1em] flex text-left `}
            >
              <div className="mr-[1em] text-[1.5rem] text-green">
                <FaCheck />
              </div>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      {/* Enquire Button */}
      <Link
        to="#contact"
        className="scroll-mt-[105.5px] btn-enquire w-[max-content] my-[2em] self-center "
        type="button"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        data-package-title={`${packages.title} .......€${packages.price}`}
      >
        ENQUIRE NOW
      </Link>
    </div>
  );
};
export default PackageCard;
