import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialStorage = localStorage.getItem("token");
  const [token, setToken] = useState(initialStorage);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const loginHandler = (token, expireDate) => {
    localStorage.setItem("token", token);
    setToken(token);
    console.log(expireDate);

    setTimeout(logoutHandler, expireDate);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
