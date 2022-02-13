import { useContext, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyATuOp4oHkAg0O8ZwHW0nPaxhDhxo7YB-g";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyATuOp4oHkAg0O8ZwHW0nPaxhDhxo7YB-g";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsLoading(false);
        const data = await response.json();

        const expireDate = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        ).getTime();
        // const expireDate = new Date(new Date().getTime() + +5000).getTime();

        authCtx.login(data.idToken, expireDate);
        history.replace("/");
        return data;
      } else {
        const data = await response.json();
        let errorMessage = "Authentication Failed";
        if (data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      alert(error.message);
    }
    setIsLoading(false);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
