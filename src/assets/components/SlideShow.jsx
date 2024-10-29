import styled from "styled-components";
import { IoIosClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SlideShow = ({ image, setIndex, totalImages, handleClose }) => {
  const handleLeftClick = () => {
    setIndex((prevState) => (prevState - 1 + totalImages) % totalImages);
  };

  const handleRightClick = () => {
    setIndex((prevState) => (prevState + 1) % totalImages);
  };

  return (
    <Wrapper>
      <div className="slide-container-img">
        <IoIosClose className="btn-close" onClick={handleClose} />
        <img src={image} alt="name" />
      </div>

      <span className="arrow arrow-left" onClick={handleLeftClick}>
        <IoIosArrowBack />
      </span>
      <span className="arrow arrow-right" onClick={handleRightClick}>
        <IoIosArrowForward />
      </span>
    </Wrapper>
  );
};

export default SlideShow;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: 2;

  .slide-container-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 80vh;
    transition: all ease-in-out 0.5s;
  }

  .slide-container-img img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 80vh;
    border-radius: 2em;
    overflow: hidden;
  }

  .title {
    position: absolute;
    top: 3em;
    right: 7em;
    color: white;
  }

  .btn-close {
    position: absolute;
    top: 1.3em;
    right: 1.3em;
    margin-left: auto;
    padding: 0;
    font-size: 2em;
    cursor: pointer;
    color: white;
  }

  .arrow {
    position: absolute;
    top: 50%;
    padding: 0.5em;
    /* background: rgba(0, 0, 0, 0.4); */
    color: white;
    font-size: 2rem;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 1;
  }

  .arrow-left {
    left: 0;
  }

  .arrow-right {
    right: 0;
  }

  @media (orientation: landscape) {
    .slide-container-img {
      max-height: 45vh;
    }
  }

  @media (max-width: 860px) {
    .btn-close {
      top: 0.7em;
      right: 0.7em;
    }

    .title {
      top: 1.8em;
      right: 5em;
    }
  }
`;
