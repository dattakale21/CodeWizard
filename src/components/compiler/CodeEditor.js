import React, { useState } from 'react';

const CodeEditor = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(`// JavaScript Boilerplate
  
  function main() {
      console.log("Hello, JavaScript!");
  }
  
  main();
  `);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);

    if (e.target.value === 'javascript') {
      setCode(`// JavaScript Boilerplate
  
  function main() {
      console.log("Hello, JavaScript!");
  }
  
  main();
  `);
    } else if (e.target.value === 'python') {
      setCode(`# Python Boilerplate
  
  def main():
      print("Hello, Python!")
  
  if __name__ == "__main__":
      main()
  `);
    } else if (e.target.value === 'c') {
      setCode(`#include <stdio.h>
  
  
  int main() {
      printf("Hello, C!\\n");
      return 0;
  }
  `);
    } else if (e.target.value === 'cpp') {
      setCode(`#include <iostream>
  
  // C++ Boilerplate
  
  using namespace std;
  
  int main() {
      cout << "Hello, C++!" << endl;
      return 0;
  }
  `);
    } else if (e.target.value === 'java') {
      setCode(`// Java Boilerplate
  
  public class Main {
  
      public static void main(String[] args) {
          System.out.println("Hello, Java!");
      }
  }
  `);
    } else if (e.target.value === 'go') {
      setCode(` // Go Boilerplate
        
  // package main
  
  import "fmt"
  
  func main() {
      fmt.Println("Hello, Go!")
  }
  `);
    } else {
      setCode('// Select a language to start coding');
    }

  };

  const handleRun = () => {
    console.log(code); // Here you can run the code logic or send it to an API
    alert('Running code...');
  };

  // TestCaseSection Component
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

  return (
    <div className="p-6">
      <h2 className="text-2xl mt-4 font-bold mb-4">Code Editor</h2>

      {/* Language Selector and Run Button */}
      <div className="flex justify-between items-center mb-4">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border p-2"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="c">C++</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
        </select>
        <button
          onClick={handleRun}
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Run
        </button>
      </div>

      {/* Code Area */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows="10"
        className="w-full border p-4"
      ></textarea>

      {/* Test Case Section */}
      <TestCaseSection />
    </div>
  );
};

export default CodeEditor;
