import React, { useState, useEffect } from 'react';
import '../Styles/styles.scss'
import WinCounter from './WinCounter';

function Game() {
  const [player, setPlayer] = useState("X")
  const [row, setRow] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)
  const [winCount, setWinCount] = useState({X: 0, O: 0})

  const userInput = (event) => {
    if (event.target.className === "square" && !winner) {
      row[event.target.id] = player
      setRow(row)

      if (player === "X") {
        setPlayer("O")
      }
      if (player === "O") {
        setPlayer("X")
      }
    }
  }
  function checkWinCondition(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        setWinner(squares[a])
      }
    }
  }

  useEffect(() => {
    checkWinCondition(row)
  }, [player, row])

  const handleReset = () => {
    setWinner(null)
    setRow(Array(9).fill(null))
    setPlayer("X")
  }

  return (
    <>
      <div className='container'>
        <WinCounter winner={winner} winCount={winCount} setWinCount={setWinCount}/>
        <div className='row justify-center'>
          {row[0] ? <button id={0}>{row[0]}</button> : <button onClick={userInput} className="square" id={0}></button>}
          {row[1] ? <button id={1}>{row[1]}</button> : <button onClick={userInput} className="square" id={1}></button>}
          {row[2] ? <button id={2}>{row[2]}</button> : <button onClick={userInput} className="square" id={2}></button>}
          {row[3] ? <button id={3}>{row[3]}</button> : <button onClick={userInput} className="square" id={3}></button>}
          {row[4] ? <button id={4}>{row[4]}</button> : <button onClick={userInput} className="square" id={4}></button>}
          {row[5] ? <button id={5}>{row[5]}</button> : <button onClick={userInput} className="square" id={5}></button>}
          {row[6] ? <button id={6}>{row[6]}</button> : <button onClick={userInput} className="square" id={6}></button>}
          {row[7] ? <button id={7}>{row[7]}</button> : <button onClick={userInput} className="square" id={7}></button>}
          {row[8] ? <button id={8}>{row[8]}</button> : <button onClick={userInput} className="square" id={8}></button>}
        </div>
        {winner
          ? <><div className='winner'>The winner is {winner}</div><button className='reset-button' onClick={handleReset}>Click here to reset the game!</button> </>
          : null}
      </div>
    </>
  );
}

export default Game;
