import { NavLink } from "react-router-dom";
import classes from "./mainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to={"/product"}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to={"/welcome"}>
            Welcome
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
