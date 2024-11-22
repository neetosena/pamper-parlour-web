import styled from "styled-components";
import LogoWhite from "../../images/logo-white.svg";

const ThankYouPackage = () => {
  return (
    <Wrapper>
      <img src={LogoWhite} alt="logo" />
      <span>Thank You!!!</span>
      <p>We'll contact you very soon.</p>
    </Wrapper>
  );
};
export default ThankYouPackage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    margin: auto;
    max-width: 100px;
    width: 30%;
  }
  span {
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
    color: white;
  }

  p {
    color: white;
  }
`;
