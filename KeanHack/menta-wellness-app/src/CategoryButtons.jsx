import React, { useState } from "react";
const CategoryButtons = () => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button className="w-32 h-32 bg-white-200 text-white text-xl font-semibold rounded-lg transition-transform transform hover:scale-95 duration-300">
        Study
      </button>
      <button className="w-32 h-32 bg-white-200 text-white text-xl font-semibold rounded-lg transition-transform transform hover:scale-95 duration-300">
        Nature
      </button>
      <button className="w-32 h-32 bg-white-200 text-white text-xl font-semibold rounded-lg transition-transform transform hover:scale-95 duration-300">
        Relaxation
      </button>
      <button className="w-32 h-32 bg-white-200 text-white text-xl font-semibold rounded-lg transition-transform transform hover:scale-95 duration-300">
        Mindfulness
      </button>
    </div>
  );
};

export default CategoryButtons;
