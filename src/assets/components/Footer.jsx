import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src="" alt="logo" />
          <div>
            <a href="tel:+353892371305">
              <BsFillTelephoneFill className="details-icon" />
              +353 89 237 1305
            </a>
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
      </div>
    </footer>
  );
};
export default Footer;
