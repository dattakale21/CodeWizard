import React from "react";
function Stringproblems() {
    const questions = [
        "What is 2 + 2?",
        "What is the capital of France?",
        "What is 5 * 3?",
        "What is the color of the sky?",
        "How many continents are there?",
        "What is the square root of 9?",
        "What is the first letter of the alphabet?",
        "How many legs does a dog have?",
        "What is 10 - 4?",
        "What is the opposite of cold?",
    ];

    return (
        <>
    
            <div className="h-screen mt-7 overflow-hidden flex flex-col">
                <h1 className="text-2xl font-bold p-4 bg-white shadow text-center">String Problems</h1>
                <div className="flex-1 overflow-auto p-4 bg-gray-100">
                    <ul className="space-y-3">
                        {Array.from({ length: 50 }, (_, i) => (
                            <li key={i} className="p-3 bg-white rounded shadow">
                                Problem {i + 1}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Stringproblems;
