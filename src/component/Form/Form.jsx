import { useState, useEffect } from "react";
import "./Form.css";

function checkIsEmailValid(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

function Form() {
  const [name, setName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isNameValid = name.trim().length > 0;
  const isEmailValid = checkIsEmailValid(email);

  console.log(checkIsEmailValid("kpatel.kp7016@gmail.com"));

  const isFormValid = isNameValid && isEmailValid;

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleNameBlur() {
    setIsNameTouched(true);
  }

  function handleEmailBlur() {
    setIsEmailTouched(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
    setIsNameTouched(true);
    setIsEmailTouched(true);
    if (!isNameValid) {
      return;
    }

    if (!isEmailValid) {
      return;
    }

    setName("");
    setEmail("");
    setIsNameTouched(false);
    setIsEmailTouched(false);
  }

  const isNameErrorVisible = !isNameValid && isNameTouched;
  const isEmailErrorVisible = !isEmailValid && isEmailTouched;

  return (
    <section className="form-section">
      <div className="form__heading-wrapper">
        <h1 className="form__heading">Basic Form</h1>
      </div>

      <form className="form flow" onSubmit={handleSubmit}>
        <div className="form__control">
          <div className="flex justify-between items-center m-1">
            <label htmlFor="form__input-name">Name:</label>
            {isNameErrorVisible && (
              <span className="form__error-message">Enter a valid name</span>
            )}
          </div>
          <input
            className={`form__input ${isNameErrorVisible ? "error" : ""}`}
            id="form__input-name"
            type="text"
            placeholder="Enter your name"
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            value={name}
          />
        </div>
        <div className="form__control">
          <div className="flex justify-between items-center m-1">
            <label htmlFor="form__input-email">Email:</label>
            {isEmailErrorVisible && (
              <span className="form__error-message">Enter a valid email</span>
            )}
          </div>
          <input
            className={`form__input ${isEmailErrorVisible ? "error" : ""}`}
            id="form__input-email"
            type="email"
            placeholder="Enter your email"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={email}
          />
        </div>

        <button disabled={!isFormValid} className="form__btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
