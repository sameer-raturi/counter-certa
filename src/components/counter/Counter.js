import React, { useState, useRef, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startCounter = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const pauseCounter = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const resetCounter = () => {
    setCount(0);
    pauseCounter();
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); // Increase the count every 1 second
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      {isRunning ? (
        <button onClick={pauseCounter}>Pause</button>
      ) : (
        <button onClick={startCounter}>Start</button>
      )}
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Counter;
