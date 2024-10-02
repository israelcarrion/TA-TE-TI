import PropTypes from 'prop-types'
import { Square } from "./Square"

export function WinnerModal({ winner, resetGame }) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó'

    return (
        <sectionc className="winner">
            <div className="text">
                <h2>{winnerText}</h2>

                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </sectionc>
    )
}

WinnerModal.propTypes = {
    winner: PropTypes.oneOfType([
        PropTypes.bool,   // Para empate (false)
        PropTypes.string, // Para ganador ('X' o 'O')
        PropTypes.oneOf([null])   // Cuando no hay ganador
    ]),
    resetGame: PropTypes.func.isRequired
};