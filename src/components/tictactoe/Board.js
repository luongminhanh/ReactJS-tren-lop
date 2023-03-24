import React from 'react'
import { calculateWinner } from '../../helper'
import Cell from './Cell'
import './GameStyle.css'

const Board = (props) => {
    return (
        <div className="game-board">
            {props
                .cells
                .map((item, index) => {
                    return (<Cell 
                        key={index} 
                        value={item} 
                        onClick={() => props.onClick(index)}
                        className = {item==="X" ? "is-x" : item==="O" ? "is-o" : ""}>
                        </Cell>)
                })}
        </div>
    )
}

export default Board