import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const LoginHandler = (event) => {
    event.preventDefault();

    dispatch(AuthAction.authentication());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={LoginHandler}>Logout</button>
            </li>
          </ul>
        )}
        {!isAuth && <h2>Login Please!</h2>}
      </nav>
    </header>
  );
};

export default Header;
