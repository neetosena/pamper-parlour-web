import { FaCheck } from "react-icons/fa";

const PackageCard = ({ packages }) => {
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
        <span className="block">{packages.info[0]}</span>

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
              className={`p-[1em] flex text-left `}
            >
              <div className="basis-[20%] text-[1.5rem] text-green">
                <FaCheck />
              </div>
              <p className="basis-[80%]">{item}</p>
            </div>
          );
        })}
      </div>
      {/* Enquire Button */}
      <button
        className="btn-enquire w-[max-content] my-[2em] self-center "
        type="button"
      >
        ENQUIRE NOW
      </button>
    </div>
  );
};
export default PackageCard;
