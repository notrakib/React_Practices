import React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.msg}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("root-backdrop")
      )}
      {ReactDOM.createPortal(
        <Overlay title={props.title} msg={props.msg} onClick={props.onClick} />,
        document.getElementById("root-overlay")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
