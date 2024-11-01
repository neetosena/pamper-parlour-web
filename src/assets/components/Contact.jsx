import styled from "styled-components";

import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import ContactForm from "../components/ContactForm";
import Title from "./Title";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="title-container">
        <Title title="Contact" />
      </div>
      <div className="contact-container">
        <div className="inner-container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.431524088415!2d-6.302628417583729!3d53.40147302798913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48671209516a1add%3A0x58e9e1e6b3ab8725!2sDance%20Factory!5e1!3m2!1sen!2sie!4v1729977616043!5m2!1sen!2sie"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="contact-dance-factory">
            The Pamper Parlour, The Dance Factory Dublin
          </p>
          <p>2d Century Business Park, Finglas, Dublin 11, D11 VP46</p>

          <div className="inner-details">
            <a href="tel:+353892371305">
              <BsFillTelephoneFill className="details-icon" />
              +353 89 237 1305
            </a>
            <a href="mailto:kidspamperparlour989@gmail.com">
              <FaEnvelope className="details-icon" />
              kidspamperparlour989@gmail.com
            </a>
          </div>
        </div>
        <div className="inner-container">
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  scroll-margin-top: 105.5px;

  .contact-container {
    padding-bottom: 4em;
  }
  .title-container {
    display: flex;
    justify-content: center;
    margin-top: 4em;
    margin-bottom: 4em;
  }
  .inner-container {
    padding: 0 2em;
    margin-bottom: 2em;
  }
  .map iframe {
    margin-bottom: 2em;
    width: 100%;
    border-radius: 0.5em;
  }

  .inner-container a {
    display: inline-block;
    color: var(--lightGray);
    line-height: 1.7;
  }

  .inner-details {
    padding-top: 1em;
  }

  .inner-details a {
    display: flex;
    width: max-content;
    align-items: center;
  }

  .contact-dance-factory {
    margin-bottom: 1em;
    font-weight: 600;
  }

  .details-icon {
    margin-right: 0.7em;
  }

  @media (min-width: 697px) {
    .contact-container {
      display: flex;
      padding-bottom: 8em;
    }

    .inner-container {
      flex-basis: 50%;
    }

    .map iframe {
      height: 370px;
    }
  }
  @media (min-width: 1000px) {
    .title-container {
      margin-top: 12em;
    }
    .contact-container {
      max-width: 1000px;
      margin: auto;
    }
  }
`;
