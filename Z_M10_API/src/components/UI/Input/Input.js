import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref1) => {
  const inputref = useRef();

  const activate = () => {
    inputref.current.focus();
  };

  useImperativeHandle(ref1, () => {
    return { focus1: activate };
  });

  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.text}</label>
      <input
        ref={inputref}
        type={props.type}
        id={props.type}
        value={props.state.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
