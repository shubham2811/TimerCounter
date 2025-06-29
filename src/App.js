import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  let timer;
  useEffect(() => {
    if (count) {
      timer = setTimeout(handleStart, 1000);
    }
  }, [count]);

  const handleStart = () => {
    setCount((count) => count + 1);
  };
  const handleStop = () => {
    clearTimeout(timer);
  };

  const handleReset = () => {
    setCount(0);
    clearTimeout(timer);
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
