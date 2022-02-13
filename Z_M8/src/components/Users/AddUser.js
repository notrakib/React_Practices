import React, { useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const lastname = useRef();
  const lastage = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.random().toString(),
      name: lastname.current.value,
      age: +lastage.current.value,
    };

    lastname.current.value = "";
    lastage.current.value = "";

    props.AddNewUser(newUser);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={SubmitHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" ref={lastname}></input>
        <label htmlFor="userage">User Age</label>
        <input id="userage" type="number" ref={lastage}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
