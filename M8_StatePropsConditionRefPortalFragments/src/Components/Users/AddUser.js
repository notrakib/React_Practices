import styles from "./AddUser.module.css";
import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  // const [enteredname, setname] = useState("");
  // const [enteredage, setage] = useState("");

  const lastname = useRef();
  const lastage = useRef();

  // const NameHandler = (event) => {
  //   setname(event.target.value);
  // };
  // const AgeHandler = (event) => {
  //   setage(event.target.value);
  // };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const user = {
      id: Math.random().toString(),
      name: lastname.current.value,
      age: lastage.current.value,
    };
    props.onSubmit(user);

    lastname.current.value = "";
    lastage.current.value = "";

    // setname("");
    // setage("");
  };
  // return (
  //   <div>

  //     <Card className = {styles.input}>
  //     <form onSubmit={SubmitHandler}>
  //       <div>
  //         <label>Username</label>
  //         <input type="text" value={enteredname} onChange={NameHandler}></input>
  //       </div>
  //       <div>
  //         <label>Age (years)</label>
  //         <input type="text" value={enteredage} onChange={AgeHandler}></input>
  //       </div>
  //       <Button type="submit" >Add User</Button>
  //     </form>
  //   </Card>
  //   </div>

  return (
    <div>
      <Card className={styles.input}>
        <form onSubmit={SubmitHandler}>
          <div>
            <label>Username</label>
            <input type="text" ref={lastname}></input>
          </div>
          <div>
            <label>Age (years)</label>
            <input type="text" ref={lastage}></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
