import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [score, setScore] = useState<number>(0); // Specify the type as number
  const [guess, setGuess] = useState<string>(""); // Specify the type as string
  const [randomNumber, setRandomNumber] = useState<number>(
    generateRandomNumber()
  ); // Specify the type as number
  const [message, setMessage] = useState<string>(""); // Specify the type as string

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  function handleGuess() {
    if (parseInt(guess) === randomNumber) {
      setScore(score + 1);
      setMessage("Congratulations, you guessed correctly!");
    } else {
      setMessage("Try again!");
    }
    setRandomNumber(generateRandomNumber());
  }

  return (
    <div className="App">
      <h1>Guess the Number Game</h1>
      <p>Score: {score}</p>
      <p>Guess a number between 1 and 10:</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        min="1"
        max="10"
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>{message}</p>
    </div>
  );
}