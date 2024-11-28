import styled from "styled-components";
import { format } from "date-fns";
import { IoClose } from "react-icons/io5";
import { Formik, Field, Form, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import ThankYouPackage from "./thankyou/ThankYouPackage";
import { timeOptions } from "../utils/data";

const PackageCardForm = ({
  packageName,
  handleCloseEnquireForm,
  isVisible,
  price,
  bgColorTitle,
  bgColor,
}) => {
  const [submitted, setSubmitted] = useState(false);

  // useEffect(() => {
  //   setSubmitted(false);
  // }, [submitted]);

  const initialValues = {
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // Format date and time
    const formattedDate = values.date
      ? format(new Date(values.date), "dd/MM/yyyy")
      : null;
    // const formatedTime = values.time
    //   ? format(new Date(values.time), "hh:mmaaa").toLocaleLowerCase()
    //   : null;

    // Prepare the subject line dynamically
    const subject = `${packageName} Package | ${values.name || "Unknow Name"}`;

    // Prepare the date for submission
    const formData = {
      ...values,
      date: formattedDate,
      subject,
    };
    // Use Netlify's form submissions endpoint
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "pamper-parlour-packages", ...formData }),
    })
      .then(() => {
        console.log("Form sucessfully submitted");

        resetForm();
        setSubmitting(false);
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          handleCloseEnquireForm();
        }, 4000);
      })
      .catch((error) => {
        console.error("Form submission error: ", error);
        setSubmitting(false);
        alert("Something went wrong, please try again.");
      });
  };

  const validationSchema = Yup.object({
    date: Yup.date().required("Please select a date"),
    time: Yup.string().required("Please select a time"),
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format!").required("Required"),
    message: Yup.string().required("Required"),
  });

  // Define Date Picker Field component
  const DatePickerField = ({ field, form, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };

    return (
      <>
        <button className="btn-date-input" onClick={handleClick}>
          {typeof field.value === "string"
            ? "Select a date"
            : format(
                (field.value && new Date(field.value)) || null,
                "dd/MM/yyyy"
              )}
        </button>
        {isOpen && (
          <>
            <div className="date-picker-container">
              <button
                type="button"
                className="btn-date-close"
                onClick={handleClick}
              >
                <IoClose />
              </button>
              <DatePicker
                {...field}
                {...props}
                calendarClassName="date-picker"
                selected={(field.value && new Date(field.value)) || null}
                onChange={(val) => {
                  form.setFieldValue(field.name, val);
                  setIsOpen(!isOpen);
                }}
                minDate={new Date()}
                inline
              />
            </div>
          </>
        )}
      </>
    );
  };
  // Define Time Picker Field component
  // const TimePickerField = ({ field, form, ...props }) => {
  //   const minTime = new Date();
  //   minTime.setHours(11, 0, 0, 0);
  //   const maxTime = new Date();
  //   maxTime.setHours(19, 30, 0, 0);
  //   return (
  //     <DatePicker
  //       {...field}
  //       {...props}
  //       selected={field.value}
  //       onChange={(val) => form.setFieldValue(field.name, val)}
  //       calendarClassName="time-picker"
  //       showTimeSelect
  //       showTimeSelectOnly
  //       timeCaption="Time"
  //       dateFormat="h:mm aa"
  //       timeIntervals={30}
  //       placeholderText="Select a time"
  //       minTime={minTime}
  //       maxTime={maxTime}
  //     />
  //   );
  // };

  if (!isVisible) {
    return;
  } else {
    return (
      <Wrapper bgcolor={`${bgColor}`} bgcolortitle={`${bgColorTitle}`}>
        <div className="inner-container">
          {/* Close Icon */}
          <div className="icon-close" onClick={handleCloseEnquireForm}>
            <IoClose className="text-3xl" />
          </div>
          {/* Here include the ThankYouPackage Component */}

          <div
            className={`${!submitted && "hide-thank-you"} thank-you-package-container`}
          >
            <ThankYouPackage />
          </div>

          <span className="title-name"> {`${packageName} | ${price}`}</span>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form
                name="pamper-parlour-packages"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="pamper-parlour-packages"
                />
                <input type="hidden" name="bot-field" />

                <input type="hidden" name="subject" value="" />

                <div className="container-date-time">
                  <div>
                    <Field name="date" component={DatePickerField} />
                    <ErrorMessage
                      name="date"
                      component="div"
                      className="error-message error-message-date"
                    />
                  </div>

                  <div>
                    <Field name="time" as="select" id="time">
                      {timeOptions.map((time, i) => {
                        return (
                          <option key={i} value={time.value}>
                            {time.label}
                          </option>
                        );
                      })}
                    </Field>
                    <ErrorMessage
                      name="time"
                      component="div"
                      className="error-message error-message-time"
                    />
                  </div>
                </div>

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
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    type="text"
                  />
                  <ErrorMessage
                    className="error-message error-message-phone"
                    name="phone"
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

                <button
                  className="btn"
                  type="submit"
                  disable={isSubmitting.toString()}
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Wrapper>
    );
  }
};
export default PackageCardForm;

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;

  .inner-container {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    background-color: ${(props) => props.bgcolor || "#ebebff"};
  }

  .icon-close {
    position: absolute;
    top: 1em;
    right: 1em;
    color: white;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    z-index: 2;
  }

  .icon-close:focus,
  .icon-close:hover {
    opacity: 0.5;
  }

  .title-name {
    padding: 0 2em;
    padding-top: 2em;
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
    text-align: center;
    background-color: ${(props) => props.bgcolortitle || "#423fd7"};
  }
  /* ------------------Thank You Package---------------- */
  .thank-you-package-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: ${(props) => props.bgcolortitle || "#423fd7"};
    transition: all 0.3s ease-in-out;
  }

  .hide-thank-you {
    display: none;
  }

  /* ------------------End Thank You Package---------------- */

  /* ------------------Form Style---------------- */

  form {
    max-width: 100vw;
    padding: 2em;

    display: flex;
    flex-direction: column;
    justify-content: space-around !important;
    overflow: scroll;
  }

  input,
  textarea,
  .btn-date-input,
  select {
    margin-bottom: 1.5em;
    padding-left: 1.3em;
    display: block;
    width: 100%;
    outline: none;
    height: 3em;
    font-size: 1rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.5em;
  }
  textarea {
    height: 10em;
    resize: none;
    font-family: var(--bodyFont);
    padding-top: 1em;
    padding-right: 1.3em;
  }

  .btn-date-input {
    text-align: left;
    background-color: white;
  }

  .btn {
    padding: 0.7em 0;
    display: block;
    width: 100%;
    outline: none;
    background: var(--pink);
    color: white;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 0.5em;
    transition: all ease-in-out 0.3s;
  }

  .btn:focus,
  .btn:hover {
    background: var(--gold);
  }

  .error-message {
    text-align: right;
    margin-top: -1.5em;
    font-size: 0.8rem;
    font-weight: 600;
    color: #c30082;
  }

  .error-message-name,
  .error-message-email {
    /* top: 5em; */
  }
  .error-message-message {
    /* top: 11.5em; */
  }

  .input-field::placeholder {
    color: #d9d9d9;
  }

  /* ------------------Date Picker Component---------------- */

  .react-datepicker-ignore-onclickoutside::placeholder {
    color: #d9d9d9 !important;
  }

  .react-datepicker-wrapper {
    position: relative !important;
    width: 100%;
  }

  .react-datepicker__time-list-item--disabled {
    display: none;
  }

  .react-datepicker__navigation-icon {
    height: 1px;
  }
  .container-date-time {
    display: flex;
    gap: 1em;
  }

  .container-date-time div {
    flex-basis: 100%;
  }

  .btn-date-close {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 240px;
    height: 300px;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: flex-end;
  }

  .btn-date-close svg {
    font-size: 1.3rem;
  }

  .date-picker-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .date-picker {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
  }

  /* ------------------End Date Picker Component---------------- */

  /* ------------------End Form Style---------------- */

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    height: 100vh;

    .inner-container {
      position: unset;
      margin: auto;
      max-width: 800px;
      width: 100%;
      max-height: 779px;
      border-radius: 0.5em;
    }

    .title-name {
      margin-top: -4em;
      padding-top: 3em;
    }

    .icon-close {
      position: unset;
      display: flex;
      justify-content: flex-end;
      padding-top: 2em;
      padding-right: 2em;
      z-index: 3;
    }

    /* ------------------Thank You Package---------------- */
    .thank-you-package-container {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 800px;
      width: 100%;
      max-height: 779px;
      height: 100%;
      border-radius: 0.5em;
    }

    /* ------------------End Thank You Package---------------- */

    /* ------------------Form Style---------------- */
    form {
      height: 100vh;
    }
    input,
    .btn-date-input,
    select {
      height: 4em;
    }

    textarea {
      height: 12em;
    }

    .container-date-time {
      display: flex;
      gap: 1.5em;
    }

    .container-date-time div {
      flex-basis: 50%;
    }
    /* ------------------End Form Style---------------- */
  }
`;
