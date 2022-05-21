import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [player, setPlayer] = useState("X")
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])
  const [row3, setRow3] = useState([])


  const userInput = (event) => {
    console.log(player)
    console.log(event.target.className)
    console.log(row1)
    if(event.target.className === "row1"){
      setRow1([...row1, player])
    }
    if(event.target.className === "row2"){
      setRow2([...row2, player])
    }
    if(event.target.className === "row3"){
      setRow3([...row3, player])
    }
    if(player === "X"){
      setPlayer("O")
    }
    if(player === "O"){
      setPlayer("X")
    }
  }

  return (
    <>
      <div className='container'>
        <div className='row justify-center'>
          <button onClick={userInput} className='row1'>{row1[0] ? row1[0] : null}</button>
          <button onClick={userInput} className='row1'>{row1[1] ? row1[1] : null}</button>
          <button onClick={userInput} className='row1'>{row1[2] ? row1[2] : null}</button>
          <button onClick={userInput} className='row2'>{row2[0] ? row2[0] : null}</button>
          <button onClick={userInput} className='row2'>{row2[1] ? row2[1] : null}</button>
          <button onClick={userInput} className='row2'>{row2[2] ? row2[2] : null}</button>
          <button onClick={userInput} className='row3'>{row3[0] ? row3[0] : null}</button>
          <button onClick={userInput} className='row3'>{row3[1] ? row3[1] : null}</button>
          <button onClick={userInput} className='row3'>{row3[2] ? row1[2] : null}</button>
        </div>
      </div>
    </>
  );
}

export default App;
