import React, { useState } from "react";
import ErrorModal from "./components/UI/ErrorModals";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [userList, setList] = useState([]);
  const [isEmpty, seterrorModal] = useState(() => {
    return userList.length === 0;
  });
  const [hasError, setError] = useState({
    title: "Error",
    msg: "No User Available",
  });

  const AddingHandler = (user) => {
    if (user.name === "" && user.age === 0) {
      setError({ title: "Input Error", msg: "Please Input Valid Information" });
      seterrorModal(true);
      return;
    }

    if (user.name === "") {
      setError({ title: "User Name Error", msg: "Please Input Valid Name" });
      seterrorModal(true);
      return;
    }
    if (user.age === 0) {
      setError({ title: "User Age Error", msg: "Please Input Valid Age" });
      seterrorModal(true);
      return;
    }

    setList((prevList) => {
      return [...prevList, user];
    });
  };

  const ErrorModalHandler = (user) => {
    seterrorModal(false);
  };

  return (
    <div>
      <div>
        <AddUser AddNewUser={AddingHandler}></AddUser>
        <UsersList users={userList}></UsersList>
      </div>

      {isEmpty && (
        <ErrorModal
          title={hasError.title}
          msg={hasError.msg}
          onClick={ErrorModalHandler}
        ></ErrorModal>
      )}
    </div>
  );
};

export default App;
