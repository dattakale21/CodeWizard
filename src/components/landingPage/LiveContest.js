import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link

const LiveContests = () => {
    const contestsData = [
        { id: 1, title: "Binary Search Mastery" },
        { id: 2, title: "Graph Algorithms Challenge" },
        { id: 3, title: "Dynamic Programming Contest" },
        { id: 4, title: "Recursion and Backtracking" },
        { id: 5, title: "Sorting and Searching" },
    ];

    const [timeLeft, setTimeLeft] = useState(contestsData.map(() => 3600));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTimes) =>
                prevTimes.map((time) => (time > 0 ? time - 1 : 0))
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    return (
        <div className="h-[100vh] p-6 pb-8 mb-7 bg-white shadow-lg rounded-lg overflow-y-auto">
            <h2 className=" text-2xl font-semibold text-blue-600 text-center mb-4 ">
                Live Contests
            </h2>

            <div className="space-y-4">
                {contestsData.map((contest, index) => (
                    <div key={contest.id} className="w-[95%] mx-auto p-4 border rounded-lg shadow-md bg-gray-100 flex justify-between items-center">
                        <div>
                            <p className="text-lg font-bold">Contest {contest.id}</p>
                            <p className="text-gray-600 font-semibold">{contest.title}</p>
                            <p className="text-red-500 font-semibold">
                                Time Left: {formatTime(timeLeft[index])}
                            </p>
                        </div>

                        {/* Link to CodeEditor page */}
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

export default LiveContests;
