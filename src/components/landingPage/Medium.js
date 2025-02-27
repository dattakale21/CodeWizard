import React from "react";


function Medium() {
    const questions = [
        "Solve x: 2x + 3 = 11",
        "What is the chemical symbol for gold?",
        "What is the sum of angles in a triangle?",
        "Who wrote 'To Kill a Mockingbird'?",
        "What is 15% of 200?",
        "Which planet is known as the Red Planet?",
        "What is the speed of light?",
        "What is the formula for the area of a circle?",
        "Who discovered gravity?",
        "What is the capital of Japan?",
    ];

    return (
        <>
        

            <div className="h-screen mt-7 overflow-hidden flex flex-col">
                <h1 className="text-2xl font-bold p-4 bg-white shadow text-center">Medium Problems</h1>
                <div className="flex-1 overflow-auto p-4 bg-gray-100">
                    <ul className="space-y-3">
                        {Array.from({ length: 50 }, (_, i) => (
                            <li key={i} className="p-3 bg-white rounded shadow">
                                Problem {i + 1}
                            </li>
                        ))}
                    </ul>
                </div>
            </div></>
    );
}

export default Medium;
