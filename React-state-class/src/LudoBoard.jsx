import { useState } from "react";

export default function LudoBoard() {
    const [move, setMove] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });

    const updateMove = (color) => {
        setMove((prevMove) => ({
            ...prevMove,
            [color]: prevMove[color] + 1
        }));
    };

    return (
        <div>
            <p>Game Begins</p>
            <p>Blue Moves = {move.blue}</p>
            <button onClick={() => updateMove("blue")} style={{ backgroundColor: "blue", color: "#fff" }}>+1</button>

            <p>Red Moves = {move.red}</p>
            <button onClick={() => updateMove("red")} style={{ backgroundColor: "red", color: "#fff" }}>+1</button>

            <p>Green Moves = {move.green}</p>
            <button onClick={() => updateMove("green")} style={{ backgroundColor: "green", color: "#fff" }}>+1</button>

            <p>Yellow Moves = {move.yellow}</p>
            <button onClick={() => updateMove("yellow")} style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
        </div>
    );
}
