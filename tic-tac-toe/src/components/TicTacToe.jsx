import "./TicTacToe.css";
import circleIcon from "../assets/images/circle.png";
import crossIcon from "../assets/images/cross.png";
import { useState } from "react";

export default function TicTacToe() {
    const [data, setData] = useState(Array(9).fill(""));
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [winner, setWinner] = useState(null);

    const currentPlayer = count % 2 === 0 ? "x" : "o";

    function toggle(index) {
        if (lock || data[index] !== "") return;

        const newData = [...data];
        newData[index] = currentPlayer;

        setData(newData);
        setCount((prev) => prev + 1);
        checkWin(newData);
    }

    function checkWin(board) {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (
                board[a] &&
                board[a] === board[b] &&
                board[b] === board[c]
            ) {
                setWinner(board[a]);
                setLock(true);
                return;
            }
        }

        if (!board.includes("")) {
            setWinner("draw");
            setLock(true);
        }
    }

    function resetGame() {
        setData(Array(9).fill(""));
        setCount(0);
        setLock(false);
        setWinner(null);
    }

    return (
        <div className="container">
            <h1 className="title">
                {winner === "x" || winner === "o" ? (
                    <>
                        Congratulations:{" "}
                        <img
                            src={winner === "x" ? crossIcon : circleIcon}
                            alt="winner"
                            className="winner-icon"
                        />
                    </>
                ) : winner === "draw" ? (
                    <>It's a draw! 🤝</>
                ) : (
                    <>
                        Tic Tac Toe Game In <span>React</span>
                    </>
                )}
            </h1>

            {!winner && (
                <div className="turn">
                    Now playing:
                    <img
                        src={currentPlayer === "x" ? crossIcon : circleIcon}
                        alt="current"
                        className="turn-icon"
                    />
                </div>
            )}

            <div className="board">
                {[0, 1, 2].map((i) => (
                    <div className="row" key={`row-${i}`}>
                        {[0, 1, 2].map((j) => {
                            const idx = i * 3 + j;
                            return (
                                <div
                                    key={idx}
                                    className="boxes"
                                    onClick={() => toggle(idx)}
                                >
                                    {data[idx] && (
                                        <img
                                            src={data[idx] === "x" ? crossIcon : circleIcon}
                                            alt={data[idx]}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            <button className="reset" onClick={resetGame}>
                Reset
            </button>
        </div>
    );
}
