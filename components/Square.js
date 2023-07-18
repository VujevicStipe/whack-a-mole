import React, { useState, useEffect } from "react";

function Square(props) {
  const [moleActive, setMoleActive] = useState(false);
  let timerId;
  const randomTime = Math.random() * 20000;

  function clickHandle(e) {
    const targetEl = e.target;

    if (targetEl.classList.contains("mole")) {
      props.scoring();
    }
  }

  useEffect(() => {
    timerId = setInterval(() => {
      setMoleActive(true);

      setTimeout(() => {
        setMoleActive(false);
      }, 800);
    }, randomTime);

    setTimeout(() => {
      clearInterval(timerId);
    }, 60 * 1000);
  }, []);

  return (
    <div
      className={`square ${moleActive && !props.gameOver ? "mole" : ""}`}
      onClick={clickHandle}
    ></div>
  );
}

export default Square;
