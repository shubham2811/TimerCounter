import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  let [count, setCount] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (isRunning) {
      let counter = count;
      const intervalId = setInterval(() => {
        if (--counter <= 0) {
          handleReset();
        } else {
          setCount(counter);
        }
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setCount(5);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>pause</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
