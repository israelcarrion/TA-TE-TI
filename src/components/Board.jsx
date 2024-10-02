import PropTypes from 'prop-types'
import { Square } from "./Square"

export const Board = ({ board, updateBoard }) => {
    return (
        <section className="game">
            {
                board.map((square, index) => (
                    <Square
                        key={index}
                        index={index}
                        updateBoard={updateBoard}
                    >
                        {square}
                    </Square>
                ))
            }
        </section>
    )
}

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,   // Para los valores 'X' o 'O'
        PropTypes.oneOf([null])  // Para los valores vacíos
    ])).isRequired,
    updateBoard: PropTypes.func.isRequired
}