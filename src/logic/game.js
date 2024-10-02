import { TURNS } from "../constants.js"
import confetti from "canvas-confetti"
import { checkWinnerFrom, checkEndGame } from "../logic/board.js"


export const resetGame = (setBoard, setTurn, setWinner) => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)

  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const updateBoard = (index, board, winner, setBoard, setTurn, setWinner, turn) => {
  //No actualizamos esta posición si ya tiene algo
  if (board[index] || winner) return;

  //Actualizamos el tablero
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)

  //Cambiamos el turno
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)

  //Guardar la partida
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)

  //Revisar si hay ganador
  const newWinner = checkWinnerFrom(newBoard)
  if (newWinner) {
    confetti()
    setWinner(newWinner)
  } else if (checkEndGame(newBoard)) {
    setWinner(false)
  }
}