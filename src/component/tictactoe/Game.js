import React, { useState } from 'react'
import { calculateWinner } from '../../helper'
import Board from './Board'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setxIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;
        // đã có người thắng hoặc ô đó có người nhấn rồi(giá trị khác null)
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setxIsNext(!xIsNext);
    }
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setxIsNext(true);
    }
    return (
        <div className='game-container'>
            <Board cells={board} onClick={handleClick} />
            <p>{winner ? `Winner is ${xIsNext ? "O !" : "X !"}` : "Chưa có winner!"}</p>
            <br/>
            <button className="game-reset" onClick={handleResetGame}>Reset Game</button>
        </div>
    )
}

export default Game