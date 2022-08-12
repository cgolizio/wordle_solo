/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { MainContext } from "../App";

function Letter({ letterPos, attemptVal, style }) {
  const {
    board,
    setDisabledLetters,
    currAttempt,
    correctWord
  } = useContext(MainContext);

  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterStatus = correct ? "correct" : almost ? "almost" : "error";
  // const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");
  const letterState = currAttempt.attempt > attemptVal ? letterStatus : undefined;

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState} style={style}>
      {letter}
    </div>
  );
}

export default Letter;