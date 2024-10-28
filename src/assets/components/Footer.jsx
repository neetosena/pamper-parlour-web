import { Link } from "react-router-dom";
import { navLinks } from "../utils/data";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

import Logo from "../images/logo_pamper_parlour.svg";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <div>
          <Link to="/" className="cursor-pointer hover:opacity-[0.5]">
            <img src={Logo} alt="logo" />
          </Link>
          <div>
            <div className="social-container">
              <a href="tel:+353892371305">
                <BsFillTelephoneFill className="details-icon" />
                +353 89 237 1305
              </a>
              <a
                href="https://www.facebook.com/thepamperparlour"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com/thepamperparlour_/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </div>
            <a href="mailto:kidspamperparlour989@gmail.com">
              <FaEnvelope className="details-icon" />
              kidspamperparlour989@gmail.com
            </a>

            <p>The Dance Factory Dublin, The Pamper Parlour</p>
            <a
              href="https://maps.app.goo.gl/zzXKzeFJLGqJTFVf7"
              target="_blank"
              rel="noreferrer"
            >
              2d Century Business Park, Finglas, Dublin 11, D11 VP46
            </a>
          </div>
        </div>
        <div>
          {/* Nav Links */}
          <ul className="container-links">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={`#${link.scrollTo}`}>
                    {"> "}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            className="download-link"
            href="/download/pamper_parlour_parental_and_consent_waiver.docx"
          >
            <FaCloudDownloadAlt className="details-icon" />
            Parental and Consent Waiver
          </a>
        </div>
      </div>
      <div className="container-designer-by">
        <p>
          © {new Date().getFullYear()} Pamper Parlour | Design by:{" "}
          <a href="https://netosena.ie" rel="noreferrer">
            Neto Sena
          </a>
        </p>
      </div>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  background: var(--lighter-pink);

  .footer-container {
    padding: 4em 2em;
  }

  .footer-container img {
    margin: 0 auto;
    max-width: 250px;
    width: 100%;
    padding-bottom: 2em;
  }

  .footer-container a {
    display: flex;
  }

  .footer-container a {
    transition: color 0.3s ease-in-out;
  }

  .footer-container a:focus,
  .footer-container a:hover {
    color: var(--pink);
  }

  .social-container {
    display: flex;
    gap: 1em;
    align-items: center;
    margin-bottom: 1em;
  }

  .details-icon {
    margin-right: 0.5em;
    align-self: center;
  }
  p {
    margin: 1em 0;
    font-weight: 600;
  }

  ul {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1em;
  }

  .download-link {
    margin-top: 2em;
    display: flex;
    align-items: center;
  }

  //////////////////////////////////////////////////
  //design by Neto Sena

  .container-designer-by {
    padding: 2em 0;
    font-size: 0.9rem;
    text-align: center;
    background: var(--lightest-pink);
    color: black;
  }

  .container-designer-by p {
    font-weight: 400;
    max-width: 100%;
    margin: 0;
  }

  .container-designer-by a {
    color: var(--pink);
    font-weight: 700;
    transition: opacity 0.5s ease-in-out;
  }

  .container-designer-by a:focus,
  .container-designer-by a:hover {
    opacity: 0.5;
  }
  //////////////////////////////////////////////////

  @media (min-width: 768px) {
    .footer-container {
      padding: 8em 2em;
      margin: auto;
      max-width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .footer-container img {
      margin: 0;
    }
    p {
      margin-bottom: 0.5em;
      margin-top: 2em;
    }
  }
`;
