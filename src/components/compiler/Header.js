import React, { useState } from "react";

const SubmissionSection = () => {
  // Set the initial view to "Problem"
  const [activeSection, setActiveSection] = useState("Problem");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Header Section */}
      <div className="flex space-x-6 mb-4 cursor-pointer">
        <div
          onClick={() => handleSectionChange("Problem")}
          className={`font-medium ${activeSection === "Problem" ? "text-blue-500" : "text-gray-600"}`}
        >
          Problem
        </div>
        <div
          onClick={() => handleSectionChange("Submission")}
          className={`font-medium ${activeSection === "Submission" ? "text-blue-500" : "text-gray-600"}`}
        >
          Submission
        </div>
        <div
          onClick={() => handleSectionChange("Decision")}
          className={`font-medium ${activeSection === "Decision" ? "text-blue-500" : "text-gray-600"}`}
        >
          Decision
        </div>
      </div>

      {/* Content Section Based on Active Tab */}
      <div className="mt-4">
        {activeSection === "Problem" && (
          <div>
            <h3 className="text-xl font-semibold">Problem Statement</h3>
            <p>This is the problem description...</p>
          </div>
        )}

        {activeSection === "Submission" && (
          <div>
            <h3 className="text-xl font-semibold">Your Submission</h3>
            <textarea className="w-full p-2 border rounded-lg" placeholder="Write your code here..."></textarea>
          </div>
        )}

        {activeSection === "Decision" && (
          <div>
            <h3 className="text-xl font-semibold">Decision</h3>
            <p>This is where the result of your submission will appear...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionSection;
