import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(counterAction.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toogle());
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Abir Bhai Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
