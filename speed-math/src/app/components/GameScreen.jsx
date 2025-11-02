"use client";

import { useState, useMemo } from "react";
import GamePanel from "./GamePanel";

const GAME_MODES = {
    normal : { label: "Normal", seconds: 30 },
    blitz : { label: "Blitz", seconds:20 },
    rapid : { label : "Rapid Fire", seconds: 10 }
};

function btnclasses (active, color) {
    const base = "px-4 py-2 rounded-lg font-sans font-medium shadow hover:shadow-lg transition ";
    const idle = "bg-gray-200 text-gray-800 hover:bg-gray-300 ";
    const map = {
        green: active ? "bg-green-500 text-white hover:bg-green-600 " : idle,
        yellow : active ? "bg-yellow-500 text-white hover:bg-yellow-600 " : idle,
        red : active ? "bg-red-500 text-white hover:bg-red-600 " : idle
    };
    return `${base} ${map[color]}`;
}

export default function GameScreen(){
    const [modeKey, setModeKey] = useState("normal");
    const mode = useMemo(() => GAME_MODES[modeKey], [modeKey]);

    return (
        <div className = "flex flex-col items-center gap-6">
            <h1 className="text-4xl font-bold font-sans"> Speed Math </h1>

        {/* Mode Selection Buttons */}
        <div className = "flex flex-wrap items-center gap-4 justify-center">
            {Object.entries(GAME_MODES).map(([key, m]) => (
                <button
                key={key}
                className= {btnclasses(modeKey === key, m.color)} 
                onClick={() => setModeKey(key)}
                aria-pressed={modeKey === key}>
                    {m.label}
                </button>
            ))}

            </div>

            <p className = "text-sm text-gray-900 mb-6">
                Selected : <span className = "font-semibold"> {mode.label} </span> - <span>{mode.seconds} seconds</span>
            </p>

            {/* Selected seconds */}
            <div className= "bg-gray-100 rounded-xl shadow p-4">
                <GamePanel seconds={mode.seconds} />
            </div>
        </div>

    );
}
   