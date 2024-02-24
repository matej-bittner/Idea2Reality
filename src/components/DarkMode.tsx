"use client";
import React, { useState } from "react";

const DarkMode = () => {
  const mode = "light";
  const [click, setClick] = useState(false);

  return (
    <div
      onClick={() => setClick(!click)}
      className="flex w-[50px] h-[32px] border-2 border-green-800 rounded-full items-center justify-between relative cursor-pointer"
    >
      <div className="w-1/2">🌙</div>
      <div className="w-1/2">☀️</div>

      <div
        className={`bg-green-600 rounded-full w-6 h-6 absolute transition-all duration-200 ${!click ? "" : "ml-5"} `}
      />
    </div>
  );
};

export default DarkMode;
