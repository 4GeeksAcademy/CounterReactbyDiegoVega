import React, { useState, useEffect } from "react";

const Counter = ({ hours, minutes, seconds }) => {
  return (
    <div className="counter-container">
      <div className="counter-tile clock-icon">
        <i className="fas fa-clock"></i>
      </div>
      <div className="d-flex flex-row text-white fs-1">
        <span className="counter-digit">{String(hours).padStart(2, '0')}</span>:
        <span className="counter-digit">{String(minutes).padStart(2, '0')}</span>:
        <span className="counter-digit">{String(seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

const CounterWrapper = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);


  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  return <Counter hours={hours} minutes={minutes} seconds={seconds} />;
};

export default CounterWrapper;
