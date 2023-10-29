import { useState } from "react";


export default function App() {
  const [timer, setTimer] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number|null>(null);

  const startTimer = () => {
    if (!intervalId) {
      const id: number = window.setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
      setIntervalId(null);
    }
  };


  const resetTimer = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
      setIntervalId(null);
    }
    setTimer(0);
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins</span>
      <br></br>
      <span>{timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer} className="stop-button">
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
