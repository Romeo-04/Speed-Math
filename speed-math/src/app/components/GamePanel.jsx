"use client";

import { useEffect, useState } from "react";

function makeQuestion() {
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    const operation = ["+", "-", "*"][Math.floor(Math.random() * 3)];

    // nested ternary operator
    const correct =
        operation === "+" ? x + y :
            operation === "-" ? x - y :
                x * y;
    return { x, y, operation, correct };
}

export default function GamePanel({ seconds = 30 }) {
    const [playing, setPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(seconds);
    const [question, setQuestion] = useState(makeQuestion());
    const [input, setInput] = useState("");
    const [score, setScore] = useState(0);

    const start = () => {
        setScore(0);
        setInput("");
        setQuestion(makeQuestion());
        setTimeLeft(seconds);
        setPlaying(true);
    };

    useEffect(() => {
        if (!playing) return;
        if (timeLeft === 0) return;

        const id = setInterval(() => {
            setTimeLeft(t => {
                if (t <= 1) {
                    setPlaying(false);
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => clearInterval(id);

    }, [playing, timeLeft]);

    const submit = () => {
        const val = Number(input);
        if (!Number.isNaN(val) && val === question.correct) {
            setScore(s => s + 1);
            setQuestion(makeQuestion());
            setInput("");

        } else {
            setInput("");
        }
    };

    if (!playing) {
        return (
            <div style={{ display: "grid", gap: "12px" }}>
                <button onClick={start}> Start ({seconds}s)</button>
                <p> Score: {score} </p>
            </div>
        );
    }

    return (
        <div style={{ display: "grid", gap: "12px" }}>
            <div> Time : <strong>{timeLeft}</strong></div>
            <div style={{ fontSize: 30, fontWeight: "bold" }}>
                {question.x} {question.operation} {question.y} = ?
            </div>

        <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder ="Type answer and press Enter"
        />
        <div>Score : <strong>{score}</strong></div>
        </div>


       
    )
}



