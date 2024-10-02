import { useState } from "react"

import { Square } from './components/Square.jsx'
import { Board } from "./components/Board.jsx"
import { TURNS } from "./constants.js"
import { initialBoard, initialTurn } from './initialState.js'
import { WinnerModal } from "./components/WinnerModal.jsx"
import { resetGame, updateBoard } from './logic/game.js'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : initialBoard
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? initialTurn
  });

  const [winner, setWinner] = useState(null);

  return (
    <main className="board">
      <h1>Ta Te Ti</h1>
      <button onClick={() => resetGame(setBoard, setTurn, setWinner)}>Reiniciar el juego</button>

      <Board board={board} updateBoard={(index) => updateBoard(index, board, winner, setBoard, setTurn, setWinner, turn)} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={() => resetGame(setBoard, setTurn, setWinner)} winner={winner} />

    </main>

  )
}

export default App
