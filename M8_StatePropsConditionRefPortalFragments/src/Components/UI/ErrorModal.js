import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import React from "react";

const Underlay = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}> Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Underlay onConfirm={props.onConfirm}></Underlay>,
        document.getElementById("underlay_root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        ></Overlay>,
        document.getElementById("overlay_root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
