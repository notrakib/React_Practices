import { useState, useEffect } from "react";

const useCounter = (binary = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (binary === true) {
        setCounter((prevCounter) => prevCounter + 1);
      }
      if (binary === false) {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [binary]);

  return counter;
};

export default useCounter;
