import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link


const PreviousContests = () => {
    const contestsData = [
        { id: 1, title: "Binary Search Mastery", winner: "Amit", submissions: 120 },
        { id: 2, title: "Graph Algorithms Challenge", winner: "Sami", submissions: 95 },
        { id: 3, title: "Dynamic Programming Contest", winner: "Prathmesh", submissions: 150 },
        { id: 4, title: "Recursion and Backtracking", winner: "Mayur", submissions: 80 },
        { id: 5, title: "Sorting and Searching", winner: "Datta", submissions: 110 },
    ];

    return (
        <div className="h-[100vh] p-6 pb-8 mb-7 bg-white shadow-lg rounded-lg overflow-y-auto">

            {/* Section Title */}
            <h2 className=" text-2xl font-semibold text-blue-600 text-center mb-4">
                Previous Contests
            </h2>

            <div className="space-y-4">
                {contestsData.map((contest) => (
                    <div
                        key={contest.id}
                        className="w-[95%] mx-auto p-4 border rounded-lg shadow-md bg-gray-100 flex justify-between items-center"
                    >
                        <div>
                            <p className="text-lg font-bold mb-1">Previous Contest {contest.id}</p>
                            <p className="text-gray-700 font-semibold mb-1">{contest.title}</p>
                            <p className="text-green-600 font-semibold mb-1">Winner: {contest.winner}</p>
                            <p className="text-gray-600 font-semibold 
">Total Submissions: {contest.submissions}</p>
                        </div>

                        <Link to="/code-editor"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                            Code
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreviousContests;
