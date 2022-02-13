import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const EmailReducer = (state, action) => {
  if (action.type === "Input") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "Blur") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const PassReducer = (state, action) => {
  if (action.type === "Input") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "Blur") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [stateEmail, dispatchEmail] = useReducer(EmailReducer, {
    value: "",
    isValid: null,
  });

  const [statePass, dispatchPass] = useReducer(PassReducer, {
    value: "",
    isValid: null,
  });

  // const { isValid: emailIsValid } = emailState;
  // const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(stateEmail.isValid && statePass.isValid);
    }, 1000);

    return () => {
      console.log("1");
      clearTimeout(identifier);
    };
  }, [stateEmail.isValid, statePass.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "Input", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: "Input", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "Blur" });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: "Blur" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(stateEmail.value, statePass.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            stateEmail.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={stateEmail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            statePass.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={statePass.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
