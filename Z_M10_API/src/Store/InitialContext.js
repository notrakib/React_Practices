import React from "react";

const AuthContext = React.createContext({
  LogIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export default AuthContext;
