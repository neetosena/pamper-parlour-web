import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoCheckbox } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const ThankYou = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper className={isVisible ? "visible" : ""}>
      <div className="container-message">
        <IoIosClose className="btn-close" onClick={() => setIsVisible(false)} />
        <IoCheckbox className="icon-sent" />
        <h2>Message Sent</h2>
        <span>We'll contact you very soon.</span>
      </div>
    </Wrapper>
  );
};

export default ThankYou;

const Wrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: var(--lightGray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease-in-out;
  z-index: 3;

  &.visible {
    opacity: 1;
  }

  .container-message {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 30em;
    width: 80%;
    height: 15em;
    border-radius: 0.5em;
    background: white;
    -webkit-box-shadow: 5px 5px 32px -5px rgba(0, 0, 0, 0.47);
    -moz-box-shadow: 5px 5px 32px -5px rgba(0, 0, 0, 0.47);
    box-shadow: 5px 5px 32px -5px rgba(0, 0, 0, 0.47);
  }

  .btn-close {
    position: absolute;
    top: 0.3em;
    right: 0.3em;
    font-size: 2rem;
    color: var(--lightGray2);
    transition: color 0.5s ease-in-out;
  }

  .btn-close:hover,
  .btn-close:focus {
    cursor: pointer;
    color: var(--darkGray);
  }

  .icon-sent {
    font-size: 3rem;
  }
  h2 {
    font-size: 1%.5;
    font-family: var(--headingFont);
  }
`;
