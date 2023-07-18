import React, { useEffect, useState } from "react";
import Square from "./Square";

function Board() {
  const [score, setScore] = useState(0);
  const [is, setIs] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  function addScore() {
    setScore((prev) => prev + 1);
  }

  useEffect(() => {
    if (!timeLeft) {
      setIs(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <>
      <h2>
        Your score: <span className="score">{score}</span>
      </h2>
      <h2>
        Time left: <span className="time-left">{timeLeft}</span>
      </h2>

      <div className="grid">
        <Square scoring={addScore} gameOver={is} />
        <Square scoring={addScore} gameOver={is} />
        <Square scoring={addScore} gameOver={is} />
        <Square scoring={addScore} gameOver={is} />
        <Square scoring={addScore} gameOver={is} />
        <Square scoring={addScore} gameOver={is} />
        <Square scoring={addScore} gameOver={is} />
        <Square scoring={addScore} gameOver={is} />
        <Square scoring={addScore} gameOver={is} />
      </div>
    </>
  );
}

export default Board;
