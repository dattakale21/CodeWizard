import React, { useState } from "react";

const TestCaseSection = () => {
  const [input, setInput] = useState("");
  const [expectedOutput, setExpectedOutput] = useState("");
  const [actualOutput, setActualOutput] = useState("");

  // Simulated Run Function
  const runTestCase = () => {
    // This is a placeholder logic; actual execution requires backend support
    setActualOutput(`Running test case with input: ${input}`);
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-4">Test Cases</h2>
      <div className="flex space-x-4">
        {/* Input Block */}
        <div className="flex-1">
          <h3 className="font-medium">Input Block</h3>
          <textarea
            className="w-full h-32 border rounded-lg p-2 resize-none"
            placeholder="Input..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>

        {/* Expected Output Block */}
        <div className="flex-1">
          <h3 className="font-medium">Expected Output Block</h3>
          <textarea
            className="w-full h-32 border rounded-lg p-2 resize-none"
            placeholder="Expected Output..."
            value={expectedOutput}
            onChange={(e) => setExpectedOutput(e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* Run Button */}
      <button
        onClick={runTestCase}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4"
      >
        Run Test Case
      </button>

      {/* Actual Output Section */}
      <div className="mt-4 p-4 border rounded-lg">
        <h3 className="font-semibold">Actual Output:</h3>
        <p>{actualOutput || "Output will be displayed here"}</p>
      </div>
    </div>
  );
};

export default TestCaseSection;
