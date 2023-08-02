import useInput from "../../hooks/useInput";
import "./Form.css";

function checkIsEmailValid(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

function checkIsNameValid(value) {
  return value.trim().length > 0;
}

function Form() {
  const {
    value: name,
    isValueValid: isNameValid,
    isTouched: isNameTouched,
    handleValueChange: handleNameChange,
    handleIsTouchedChange: handleIsNameTouchedChange,
  } = useInput(checkIsNameValid);

  const {
    value: email,
    isValueValid: isEmailValid,
    isTouched: isEmailTouched,
    handleValueChange: handleEmailChange,
    handleIsTouchedChange: handleIsEmailTouchedChange,
  } = useInput(checkIsEmailValid);

  function handleSubmit(event) {
    event.preventDefault();

    handleIsNameTouchedChange(true);
    handleIsEmailTouchedChange(true);

    if (!isNameValid) {
      return;
    }

    if (!isEmailValid) {
      return;
    }

    handleNameChange("");
    handleEmailChange("");

    handleIsNameTouchedChange(false);
    handleIsEmailTouchedChange(false);
  }

  const isFormValid = isNameValid && isEmailValid;

  return (
    <section className="form-section">
      <div className="form__heading-wrapper">
        <h1 className="form__heading">Basic Form</h1>
      </div>

      <form className="form flow" onSubmit={handleSubmit}>
        <div className="form__control">
          <div className="flex justify-between items-center m-1">
            <label htmlFor="form__input-name">Name:</label>
            {!isNameValid && isNameTouched && (
              <span className="form__error-message">Enter a valid name</span>
            )}
          </div>
          <input
            className={`form__input ${
              !isNameValid && isNameTouched ? "error" : ""
            }`}
            id="form__input-name"
            type="text"
            placeholder="Enter your name"
            onChange={(event) => {
              handleNameChange(event.target.value);
            }}
            onBlur={() => {
              handleIsNameTouchedChange(true);
            }}
            value={name}
          />
        </div>
        <div className="form__control">
          <div className="flex justify-between items-center m-1">
            <label htmlFor="form__input-name">Email:</label>
            {!isEmailValid && isEmailTouched && (
              <span className="form__error-message">Enter a valid email</span>
            )}
          </div>
          <input
            className={`form__input ${
              !isEmailValid && isEmailTouched ? "error" : ""
            }`}
            id="form__input-name"
            type="text"
            placeholder="Enter your email"
            onChange={(event) => {
              handleEmailChange(event.target.value);
            }}
            onBlur={() => {
              handleIsEmailTouchedChange(true);
            }}
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
