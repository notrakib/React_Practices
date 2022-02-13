import React, { useContext } from "react";
import AuthContext from "../../Store/InitialContext";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.LogIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.LogIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.LogIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
