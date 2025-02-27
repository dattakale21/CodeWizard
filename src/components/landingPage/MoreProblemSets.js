import React from "react";

const MoreProblemSets = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">More Problem Sets</h2>
      <div className="space-y-3 mt-2">
        {["String Set", "Array Set", "Vector Set"].map((set, index) => (
          <button
            key={index}
            className="w-full p-3 border rounded-lg text-lg font-bold shadow-sm bg-blue-500 text-white hover:bg-blue-600"
          >
            {set} Problems
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoreProblemSets;
