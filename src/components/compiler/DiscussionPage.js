import React from "react";
import Navbar from "../landingPage/Navbar"

const DiscussionPage = () => {
    return (
        <>
            <Navbar />

            <div className="p-6">

                <div className="grid grid-cols-2 gap-4">
                    {/* Create 8 discussion boxes */}
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-3 flex items-center justify-center"
                        >
                            <div className="text-center">
                                <p className="font-semibold">Discussion {index + 1}</p>
                                <p className="text-sm text-gray-500">Title of the discussion</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DiscussionPage;
