import React, {  useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const initialValues = {
    username: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [send, setSend] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      if (isSubmitting) {
        setSend(true);
        console.log(formValues);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.message) {
      errors.message = "Message is required!";
    }

    return errors;
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (send) {
      console.log("Sending...");
      emailjs
        .sendForm(
          "service",
          "template_",
          e.target,
          "KEY"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormValues({ ...formValues, ...initialValues });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <ContactSectionStyled>
      <div className="content-write">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 30,
            wrapperClassName: "Typewriter_wrapper",
            strings: [
              "If you want to hire me, ...",
              "...or you have some question to me,",
              "... please send me an email down bellow",
            ],
          }}
        />
      </div>
      <div className="contact-container">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="username">Your name:</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>
          <label htmlFor="email">Your e-mail:</label>
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
          <label htmlFor="msg">Your message:</label>
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
          ></textarea>
          <p>{formErrors.message}</p>
          <button className="form-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </ContactSectionStyled>
  );
};

const ContactSectionStyled = styled.div`
  margin-top: 5rem;
  .content-write {
    display: flex;
    justify-content: center;
    padding: 1rem;
    .Typewriter_wrapper {
      color: var(--font-light-color);
      font-family: "Nunito" sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  .contact-container {
    width: 100%;
    .form-button {
      font-size: 1rem;
      padding: 1rem;
      width: 8rem;
      background-color: var(--primary-color);
      color: var(--white-color);
      outline: none;
      border: none;
      cursor: pointer;
      margin-top: 1rem;
      float: right;
      position: relative;
      transition: all 0.4s ease-in-out;
      &::after {
        content: "";
        height: 0.2rem;
        position: absolute;
        width: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
        border-radius: 10px;
        transition: all 0.4s ease-in-out;
      }
      &:hover::after {
        width: 100%;
        background-color: var(--white-color);
      }
      &:hover {
        transform: translateY(5px);
      }
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      p {
        color: red;
        font-size: 0.8rem;
        margin-top: 0.5rem;
      }
      label {
        font-size: 1rem;
        margin-top: 1rem;
      }
      input,
      textarea {
        width: 100%;
        font-size: 1rem;
        padding: 0.5rem;
        color: var(--font-light-color);
        background-color: var(--background-dark-color-2);
        outline: none;
        border: none;
        border-radius: 9px;
        margin-top: 1rem;
      }
      textarea {
        min-height: 200px;
        resize: none;
        overflow: hidden;
      }
    }
  }
`;

export default ContactSection;
