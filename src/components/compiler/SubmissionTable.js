import React, { useState } from "react";
import ProblemSection from "./ProblemSection"; // Import the ProblemSection component
import DiscussionSection from "./DiscussionSection"; // Import the new DiscussionSection component

const SubmissionSection = () => {
  // Manage the active section (Problem, Submission, or Decision)
  const [activeSection, setActiveSection] = useState("Problem");

  // Function to handle the tab switching
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Sample data for the submission table
  const submissionData = [
    { userName: "Amit", language: "JavaScript", time: "10:30 AM" },
    { userName: "Sami", language: "Python", time: "11:00 AM" },
    { userName: "Mayur", language: "Java", time: "11:45 AM" },
    { userName: "Prathmesh", language: "Java", time: "09:45 AM" },
    { userName: "Datta", language: "Java", time: "05:45 AM" }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-1 mt-9 style={{ width: '80%' }}">
      {/* Header Section with clickable tabs */}
      <div className="flex space-x-6 mb-4 cursor-pointer">
        {/* Problem Tab */}
        <div
          onClick={() => handleSectionChange("Problem")}
          className={`font-medium ${activeSection === "Problem" ? "text-blue-500" : "text-gray-600"}`}
        >
          Problem
        </div>

        {/* Submission Tab */}
        <div
          onClick={() => handleSectionChange("Submission")}
          className={`font-medium ${activeSection === "Submission" ? "text-blue-500" : "text-gray-600"}`}
        >
          Submission
        </div>

        {/* Discussion Tab */}
        <div
          onClick={() => handleSectionChange("Decision")}
          className={`font-medium ${activeSection === "Decision" ? "text-blue-500" : "text-gray-600"}`}
        >
          Discussion
        </div>
      </div>

      {/* Content based on active section */}
      <div className="mt-4">
        {activeSection === "Problem" && <ProblemSection />} {/* Use ProblemSection component */}

        {activeSection === "Submission" && (
          <div>
            <h3 className="text-xl font-semibold">Submission Table</h3>

            {/* Table for Submission */}
            <table className="table-auto w-full mt-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">User Name</th>
                  <th className="px-4 py-2">Submission Language</th>
                  <th className="px-4 py-2">Submission Time</th>
                </tr>
              </thead>
              <tbody>
                {submissionData.map((submission, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{submission.userName}</td>
                    <td className="border px-4 py-2">{submission.language}</td>
                    <td className="border px-4 py-2">{submission.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeSection === "Decision" && <DiscussionSection />} {/* Use DiscussionSection component */}
      </div>
    </div>
  );
};

export default SubmissionSection;
