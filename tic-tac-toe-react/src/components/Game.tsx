import React, { useState, useEffect } from 'react';
import '../Styles/styles.scss'
import WinCounter from './WinCounter';

const gameRows: string[] = []

interface Winners {
  X: number;
  O: number;
}

function Game() {
  const [player, setPlayer] = useState<string>("X")
  const [row, setRow] = useState<typeof gameRows>(Array(9).fill(null))
  const [winner, setWinner] = useState<string>(null)
  const [winCount, setWinCount] = useState<Winners>({X: 0, O: 0})

  const userInput = (event) => {
    if (event.target.className === "square" && !winner) {
      const number = parseInt(event.target.id)
      row[number] = player
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
          {row.map((square, index) => {
            return square
            ? <button key={index} id={index.toString()}>{row[index]}</button>
            : <button key={index} onClick={userInput} className="square" id={index.toString()}></button>})}
        </div>
        {winner
          ? <><div className='winner'>The winner is {winner}</div><button className='reset-button' onClick={handleReset}>Click here to reset the game!</button> </>
          : null}
      </div>
    </>
  );
}

export default Game;
