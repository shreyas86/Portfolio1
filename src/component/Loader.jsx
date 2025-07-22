import React from "react";
import "../CSS/Loader.css"; // Make sure this file exists

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="bg-gray-100 dark:bg-[#1e1e1e] rounded-lg shadow-md w-[90%] max-w-md p-4 border border-gray-200 dark:border-gray-700 font-mono">
        {/* Top buttons */}
        <div className="flex space-x-2 mb-2">
          <span className="h-3 w-3 bg-red-500 rounded-full"></span>
          <span className="h-3 w-3 bg-yellow-400 rounded-full"></span>
          <span className="h-3 w-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Terminal content */}
        <div className="border-t border-gray-300 dark:border-gray-600 pt-3 text-sm leading-relaxed overflow-hidden">
          <p className="text-black dark:text-white flex">
            <span className="mr-1">&gt;</span>
            <span className="typing-line">npm install shreyas-portfolio</span>
          </p>

          <p className="text-green-600 dark:text-green-400 appear-line appear-1">
            ✔ Searching for Shreyas's Portfolio.
          </p>
          <p className="text-green-600 dark:text-green-400 appear-line appear-2">
            ✔ Downloading...
          </p>
          <p className="text-gray-600 dark:text-gray-400 appear-line appear-3">
            Success! Portfolio loading...
          </p>
          <p className="text-gray-600 dark:text-gray-400 appear-line appear-4">
            Welcome...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
