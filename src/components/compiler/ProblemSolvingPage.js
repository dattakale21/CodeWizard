import React from "react";
import SubmissionTable from "./SubmissionTable";
import CodeEditor from "./CodeEditor";
import TestCaseSection from "./TestCaseSection";
import "./ProblemSolvingPage.css";

const ProblemSolvingPage = () => {
  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
      {/* Left Section: Submission Section */}
      <div className="w-1/3 p-4 overflow-y-auto">
        <SubmissionTable />
      </div>

      {/* Right Section: Code Editor and Test Cases */}
      <div className="w-2/3 p-4 flex flex-col h-full">
        <div className="flex flex-col h-full">
          {/* Code Editor */}
          <div className="flex-grow overflow-auto mb-4">
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolvingPage;
