import React, {
  useEffect,
  useReducer,
  useState,
  useContext,
  useRef,
} from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

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
  const inputEmail = useRef();
  const inputPass = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(stateEmail.isValid && statePass.isValid);
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [stateEmail.isValid, statePass.isValid]);

  const authCtx = useContext(AuthContext);

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
    if (formIsValid) {
      authCtx.onLogin(stateEmail.value, statePass.value);
    } else if (!stateEmail.isValid) {
      inputEmail.current.activate();
    } else if (!statePass.isValid) {
      inputPass.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={inputEmail}
          id="email"
          label="E-Mail"
          type="email"
          isValid={stateEmail.isValid}
          value={stateEmail.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={inputPass}
          id="password"
          label="Password"
          type="password"
          isValid={statePass.isValid}
          value={statePass.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
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
