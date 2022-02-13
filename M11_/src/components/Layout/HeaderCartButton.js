import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return <div className={classes.button} onClick={props.onClick}>{props.children}</div>;
};

export default HeaderCartButton;
