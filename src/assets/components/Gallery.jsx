import { useState } from "react";
import Title from "./Title";
import { gallery } from "../utils/data";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [changeColor, setChangeColor] = useState(false);

  const handleBulletClick = (id) => {
    setIndex(id);
    if (id === index) {
      setChangeColor(!changeColor);
    }
  };

  return (
    <section>
      <Title title="Gallery" />
      <div>
        <img
          key={gallery[index].id}
          src={gallery[index].img}
          alt={gallery[index].alt}
        />
      </div>
      <div className="m-auto w-[9em] flex justify-between">
        {gallery.map((_, i) => {
          return (
            <span
              key={i}
              className={`inline-block ${i === index ? "bg-pink" : "bg-slate-400"}  rounded-[50%] w-[.7em] h-[.7em]`}
              onClick={() => handleBulletClick(i)}
            ></span>
          );
        })}
      </div>
    </section>
  );
};
export default Gallery;
