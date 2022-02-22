import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import Counter from "./components/Counter";
import { useSelector } from "react-redux";

import React from "react";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && (
        <div>
          <UserProfile /> <Counter />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
