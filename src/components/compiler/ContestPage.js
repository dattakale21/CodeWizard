import React from "react";
import LiveContests from "../landingPage/LiveContest"; // Import the LiveContests component
import PreviousContests from "../landingPage/PreviousContests"; // Import the PreviousContests component
import Navbar from "../landingPage/Navbar";

const ContestPage = () => {
    return (
        <>
            <Navbar />

            <div className="flex h-screen bg-gray-100">
                {/* Left Section: Live Contests */}
                <div className="w-1/2 p-6">
                    <LiveContests /> {/* Display the Live Contests here */}
                </div>

                {/* Right Section: Previous Contests */}
                <div className="w-1/2 p-6">
                    <PreviousContests /> {/* Display the Previous Contests here */}
                </div>
            </div>
        </>
    );
};

export default ContestPage;
