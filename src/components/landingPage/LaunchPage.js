import React from "react";
import Navbar from "./Navbar";
import Contests from "./LiveContest";
import PreviousContests from "./PreviousContests";
import ProblemSets from "./ProblemSets";
import MoreProblemSets from "./MoreProblemSets";

const LaunchPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar />

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <Contests />
        <PreviousContests />
      </div>

      {/* Problem Sets */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <ProblemSets />
        <MoreProblemSets />
      </div>
    </div>
  );
};

export default LaunchPage;
