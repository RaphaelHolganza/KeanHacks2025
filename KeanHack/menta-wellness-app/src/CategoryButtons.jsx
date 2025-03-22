import React, { useState } from "react";

const CategoryButtons = () => {
  // Correct usage of useState
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle visibility of the dropdown
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev); // Toggle the state
  };

  return (
    <div className="flex-row items-center">
      {/* Nature Button */}
      <button className="w-32 h-32 bg-[#E5E5E5] text-white text-xl font-semibold rounded-lg transition-transform transform hover:scale-95 duration-300">
        Park 🏞️
      </button>
      <button className="w-32 h-32 bg-[#E5E5E5] text-white text-xl font-semibold rounded-lg transition-transform transform hover:scale-95 duration-300">
        Reserve 🌸
      </button>
      <button className="w-32 h-32 bg-[#E5E5E5] text-white text-xl font-semibold rounded-lg transition-transform transform hover:scale-95 duration-300">
        Garden
      </button>
      <button className="w-32 h-32 bg-[#E5E5E5] text-white text-xl font-semibold rounded-lg transition-transform transform hover:scale-95 duration-300">
        Arbortorem 🌳
      </button>
    </div>
  );
};

export default CategoryButtons;