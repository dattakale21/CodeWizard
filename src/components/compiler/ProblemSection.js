import React from 'react';

const ProblemSection = () => {
  return (
    <div className="p-4">
      <h4 className="text-lg font-semibold mt-4">Problem Statement</h4>
      <p className="mt-2">
        You are given an array of integers <code>nums</code> and an integer <code>target</code>. 
        Return the indices of the two numbers such that they add up to <code>target</code>.
      </p>

      <h4 className="text-lg font-semibold mt-4">Example</h4>
      <div className="mt-2">
        <h5>Example 1:</h5>
        <p><h6>Input:</h6>nums = [2,7,11,15], target = 9</p>
        <p><h6>Output:</h6> [0,1]</p>
        <p><h5>Explanation:</h5>Because nums[0] + nums[1] == 9, we return [0, 1].</p>
      </div>
      <h4 className="text-lg font-semibold mt-4">Constraints</h4>
      <ul className="mt-2 list-disc pl-6">
        <li>2 &lt;= nums.length &lt;= 10^4</li>
        <li>-10^9 &lt;= nums[i] &lt;= 10^9</li>
        <li>-10^9 &lt;= target &lt;= 10^9</li>
      </ul>
    </div>
  );
};

export default ProblemSection;
