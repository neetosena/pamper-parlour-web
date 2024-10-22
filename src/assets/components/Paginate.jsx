import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Paginate = ({
  pages,
  handleClickPageBack,
  handleClickPageForward,
  handleClickPage,
}) => {
  return (
    <div className="flex gap-[1em]">
      <button
        type="button"
        onClick={handleClickPageBack}
        className="py-[0.7em] px-[1em] border-solid border-[1px] border-light-pink rounded-[0.2em] bg-light-pink text-white "
      >
        <IoIosArrowBack />
      </button>
      {pages.map((_, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleClickPage(index)}
            className="font-bold py-[0.48em] px-[1.5em] border-solid border-[1px] border-white rounded-[0.2em] bg-white text-pink"
          >
            {index + 1}
          </button>
        );
      })}

      <button
        type="button"
        onClick={handleClickPageForward}
        className="py-[0.7em] px-[1em] border-solid border-[1px] border-light-pink rounded-[0.2em] bg-light-pink text-white"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};
export default Paginate;
