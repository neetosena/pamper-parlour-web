import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import ThankYou from "./ThankYou";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const encode = (data) => {
    console.log(
      Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    );
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Use Netlify's form submissions endpoint
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "pamper-parlour-contact", ...values }),
    })
      .then(() => {
        console.log("Form sucessfully submitted");
        resetForm();
        setSubmitting(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);

        // navigate("/thank-you");
        // alert("Thank you for your message!");
      })
      .catch((error) => {
        console.error("Form submission error: ", error);
        setSubmitting(false);
        alert("Something went wrong, please try again.");
      });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format!").required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <Wrapper>
      {submitted && (
        <div className="container-Thank-you-message">
          <ThankYou />
        </div>
      )}

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form
            name="pamper-parlour-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="pamper-parlour-contact"
            />
            <input type="hidden" name="bot-field" />
            <div>
              <Field
                className="input-field"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
              />
              <ErrorMessage
                className="error-message error-message-name"
                name="name"
                component="div"
              />
            </div>

            <div>
              <Field
                className="input-field"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <ErrorMessage
                className="error-message error-message-email"
                name="email"
                component="div"
              />
            </div>
            <div>
              <Field
                className="input-field"
                id="message"
                name="message"
                placeholder="Message"
                as="textarea"
              />
              <ErrorMessage
                className="error-message error-message-message"
                name="message"
                component="div"
              />
            </div>

            <button type="submit" disable={isSubmitting.toString()}>
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
  div {
    position: relative;
  }

  //colour the background of the ThankYou component
  .container-Thank-you-message {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }

  input,
  textarea {
    margin-bottom: 2em;
    padding-left: 1.3em;
    display: block;
    width: 100%;
    outline: none;
    height: 4em;
    font-size: 1rem;
    border: 1px solid #d7d7d7;
    border-radius: 1em;
  }
  textarea {
    height: 10em;
    resize: none;
    font-family: var(--bodyFont);
    padding-top: 1em;
    padding-right: 1.3em;
  }

  .input-field::placeholder {
    color: #d9d9d9;
  }

  button {
    display: block;
    width: 100%;
    outline: none;
    background: var(--pink);
    height: 4em;
    color: white;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 1em;
    transition: all ease-in-out 0.3s;
  }

  button:focus,
  button:hover {
    background: var(--gold);
  }

  .error-message {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: #c30082;
  }

  .error-message-name,
  .error-message-email {
    top: 5em;
  }
  .error-message-message {
    top: 11.5em;
  }

  @media (min-width: 697px) {
    textarea {
      height: 14em;
    }

    .error-message-message {
      top: 16em;
    }
  }
  @media (min-width: 1000px) {
    textarea {
      height: 16em;
    }
    .error-message-message {
      top: 18em;
    }
  }
`;
