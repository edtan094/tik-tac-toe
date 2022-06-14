import React from 'react';
import Game from './components/Game.tsx';
import './Styles/styles.scss'

function App() {

    return (
      <>
      <h1 className='row justify-center'>Tic Tac Toe</h1>
        <Game />
      </>
    );
  }

export default App;
