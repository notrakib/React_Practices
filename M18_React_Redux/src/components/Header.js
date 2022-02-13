import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authAction.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {auth && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
