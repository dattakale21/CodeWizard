import React from "react";

function Hard() {
  const questions = [
    "What is the derivative of x^2?",
    "What is the value of Planck's constant?",
    "Who proposed the theory of relativity?",
    "Solve for x: x^2 - 4x + 4 = 0",
    "What is the chemical formula for glucose?",
    "What is Schrödinger's cat paradox?",
    "What is the integral of sin(x)?",
    "Who is considered the father of modern computing?",
    "What is the capital of Switzerland?",
    "What is the largest prime number discovered so far?",
  ];

  return (
    <>
     
      <div className="h-screen mt-7 overflow-hidden flex flex-col">
        <h1 className="text-2xl font-bold p-4 bg-white shadow text-center">Hard Problems</h1>
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

export default Hard;
