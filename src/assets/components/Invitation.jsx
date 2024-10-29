import styled from "styled-components";
import BackgroundInvitation from "../images/background-invitation.jpg";
import InvitationImage from "../images/invitation.png";

const Invitation = () => {
  return (
    <Wrapper>
      <div className="invitation-container">
        <div className="inner-container">
          <h4>
            Download a free invitation to make your little girl’s pamper party
            extra special!
          </h4>
          <p>
            Perfect for sharing the excitement of her upcoming salon inspired
            celebration
          </p>
          <a
            href="/download/pamper_parlour_invitation.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CLICK HERE
          </a>
        </div>
        <img
          className="invitation-img"
          src={InvitationImage}
          alt="Download a Free Invitation"
        />
      </div>
    </Wrapper>
  );
};
export default Invitation;

const Wrapper = styled.section`
  padding: 4em 2em;
  background-color: var(--lighter-pink);
  /* background-image: url(${BackgroundInvitation});
  background-size: cover;
  background-position: center bottom; */
  min-height: 80vh;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 1em;
    text-align: center;
    color: var(--pink);
  }

  p {
    text-align: center;
  }

  a {
    display: flex;
    margin: auto;
    margin-top: 2em;
    width: max-content;
    padding: 0.5em 2em;
    font-weight: 600;
    border: 2px solid var(--pink);
    color: var(--pink);
    border-radius: 0.5em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  a:focus,
  a:hover {
    background: var(--gold);
    color: white;
    border: 2px solid var(--gold);
  }

  .invitation-img {
    margin-top: 2em;
  }

  @media (min-width: 768px) {
    min-height: 50vh;
    .invitation-container {
      margin: auto;
      max-width: 1000px;
      display: flex;
      gap: 7em;
      align-items: center;
    }

    .invitation-img {
      max-width: 400px;
      height: 100%;
    }
  }
`;
