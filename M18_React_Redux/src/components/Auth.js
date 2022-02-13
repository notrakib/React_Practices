import classes from "./Auth.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";

const Auth = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authAction.login());
  };

  return (
    <main className={classes.auth}>
      {!auth && (
        <section>
          <form onSubmit={loginHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button>Login</button>
          </form>
        </section>
      )}
    </main>
  );
};

export default Auth;
