import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTimes = (expireDate) => {
  const currentTime = new Date().getTime();

  const remainingTime = expireDate - currentTime;
  return remainingTime;
};

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
    const remainingTime = calculateRemainingTimes(expireDate);
    setTimeout(logoutHandler, remainingTime);
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
