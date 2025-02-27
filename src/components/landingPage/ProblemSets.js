import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";


function ProblemSets() {
  const location = useLocation();
  const difficultyLevels = ["Easy", "Medium", "Hard"];
  const problemCategories = ["String", "Stack & Queue", "Binary Tree"];

  return (<>
    <Navbar />


    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* First Column: Difficulty Levels */}
      <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Difficulty Levels</h2>
        <ul className="space-y-2">
          {difficultyLevels.map((level, index) => (
            <li key={index}>
              <Link
                to={`/problems/difficulty/${level.toLowerCase()}`}
                className="text-blue-600"
              >
                {level}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Second Column: Problem Categories */}
      <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Problem Categories</h2>
        <ul className="space-y-2">
          {problemCategories.map((category, index) => (
            <li key={index}>
              <Link
                to={`/problems/category/${category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                className="text-blue-600"
                onClick={() => console.log("Navigating to:", `/problems/category/${category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`)}
              >
                {category}
              </Link>

            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
  );
}

export default ProblemSets;
