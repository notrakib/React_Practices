import { useDispatch, useSelector } from "react-redux";
import { CounterAction } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const showcounter = useSelector((state) => state.counter.showCounter);

  const IncrementHandler = () => {
    dispatch(CounterAction.Increment());
  };

  const DecrementHandler = () => {
    dispatch(CounterAction.Decrement());
  };

  const IncreaseHandler = () => {
    dispatch(CounterAction.Increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(CounterAction.Toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && (
        <div>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={IncrementHandler}>Increment</button>
            <button onClick={IncreaseHandler}>Increase by 10</button>
            <button onClick={DecrementHandler}>Decrement</button>
          </div>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
