import React, { useState, useEffect } from 'react';


const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
        timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);
  function formattime() {
    const minutes = Math.floor((time % 3600) / 60);
    const hours = Math.floor(time / 3600);
    const m = minutes < 10 ? "0" + minutes : minutes;
    const seconds = time % 60;
    const s = seconds < 10 ? "0" + seconds : seconds;
    const h = hours < 10 ? "0" + hours : hours;
    return `${h}::${m}::${s}`;
  }


  const start= () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch App</h1>
      <h2>{formattime(time)} seconds</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
