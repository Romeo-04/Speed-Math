"use client";

export default function StartButton() {
    return (
        <button style={{
            backgroundColor: "#4eba7bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            borderRadius: "5px"
        }} 

        onClick={() => alert("Game Started!")}>
            Start
        </button>
    );
}