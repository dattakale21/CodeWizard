// src/components/CodeEditor.js
import React, { useState } from 'react';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleRun = () => {
    alert("Running Code: \n" + code);
    // Here you could add logic to run/compile the code
  };

  const handleClear = () => {
    setCode('// Write your code here');
  };

  return (
    <div className="flex flex-col h-full p-4 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-semibold">Code Editor</h2>
      <textarea
        value={code}
        onChange={handleChange}
        rows={10}
        className="resize-none p-2 border border-gray-400 rounded-md dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
      />
      <div className="flex justify-end mt-4">
        <button
          onClick={handleRun}
          className="mr-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Run
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
