import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../Store/InitialContext";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === 1) {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === 2) {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passReducer = (state, action) => {
  if (action.type === 1) {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 2) {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const emailRef = useRef();
  const passRef = useRef();

  const ctx = useContext(AuthContext);

  const [stateEmail, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [statePass, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(stateEmail.isValid && statePass.isValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [stateEmail.isValid, statePass.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 1, val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: 1, val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 2 });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: 2 });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid === true) {
      console.log(emailRef.current.value);
      ctx.onLogin(stateEmail.value, statePass.value);
    } else if (!stateEmail.isValid) {
      emailRef.current.focus1();
    } else if (!statePass.isValid) {
      passRef.current.focus1();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          text={"E-Mail"}
          state={stateEmail}
          type={"email"}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>

        <Input
          ref={passRef}
          text={"Password"}
          state={statePass}
          type={"password"}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
