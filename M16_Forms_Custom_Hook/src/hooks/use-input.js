import { useState } from "react";

const UseInput = (validate) => {
  const [entered, setEntered] = useState("");
  const [enteredTouched, setEnteredTouched] = useState(false);

  const enteredIsValid = validate(entered);
  const inputIsInvalid = !enteredIsValid && enteredTouched;

  const inputChangeHandler = (event) => {
    setEntered(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setEnteredTouched(true);
  };

  const reset = () => {
    setEntered("");
    setEnteredTouched(false);
  };

  return {
    entered,
    enteredIsValid,
    inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default UseInput;
