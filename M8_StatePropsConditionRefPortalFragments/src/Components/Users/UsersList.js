import React, { useState } from "react";
import styles from "./UsersList.module.css";
import AddUser from "./AddUser";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const UsersList = () => {
  const [getdata, setdata] = useState([]);
  const [currentState, prevState] = useState(true);

  const Initialize = (data) => {
    prevState(false);
    if (data.name.trim().length > 0 && data.age.trim().length > 0) {
      setdata((prevExpenses) => {
        return [data, ...prevExpenses];
      });
      prevState(true);
    }
  };

  const Confirmed = () => {
    prevState(true);
  };

  return (
    <React.Fragment>
      <AddUser onSubmit={Initialize} />
      {currentState === true && (
        <Card className={styles.users}>
          <ul>
            {getdata.map((adata) => (
              <li key={adata.id}>
                Name = {adata.name} || Age = {adata.age}
              </li>
            ))}
          </ul>
        </Card>
      )}
      {!currentState && (
        <ErrorModal
          title={"Empty Input"}
          message={"Give Valid Information"}
          onConfirm={Confirmed}
        ></ErrorModal>
      )}
    </React.Fragment>
  );
};

export default UsersList;
