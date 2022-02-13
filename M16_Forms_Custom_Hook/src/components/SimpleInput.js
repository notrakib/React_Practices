import UseInput from "../../src/hooks/use-input";

const SimpleInput = (props) => {
  const {
    entered: enteredName,
    enteredIsValid: enteredNameIsValid,
    inputIsInvalid: nameInputIsInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = UseInput((value) => value.trim() !== "");

  const {
    entered: enteredEmail,
    enteredIsValid: enteredEmailIsValid,
    inputIsInvalid: enteredEmailIsInvalid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = UseInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredNameIsValid) {
      return;
    }
    console.log(enteredName, " & ", enteredEmail);
    resetName();
    resetEmail();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
