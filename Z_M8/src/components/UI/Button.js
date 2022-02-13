import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={classes.button}
        type={props.children || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
