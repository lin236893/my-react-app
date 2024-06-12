import React ,{useState} from "react";
import Board from "./Board";
import './tictactoe.css';

function TicTacToe()
{
    const [history, sethistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    const handlePlay = (nextSquares)=>{
        const nextHistory = [...history.slice(0,currentMove+1),nextSquares];
        sethistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    return (
        <div className="game">
            <div className="tic-tac-toe-board">
                <Board xIsNext={xIsNext} squares = {currentSquares} onPlay={handlePlay}/>
            </div>
               
        </div>
    )

}

export default TicTacToe;