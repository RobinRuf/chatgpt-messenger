"use client";

import { useState } from "react";

function SettingsPage() {
  const [active, setActive] = useState("");

  const setTemp = (mode: string) => {
    setActive(mode);
  };

  return (
    <div className="flex flex-col items-center justify-center text-white h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">Settings</h1>

      {/* Temperature */}
      <div className="flex justify-center items-center space-x-4">
        <p className="font-bold text-white mr-4">Answer-Style:</p>
        <button
          id="rational"
          onClick={() => setTemp("rational")}
          className={`settingsButton ${
            active === "rational" ? "bg-slate-600" : ""
          }`}
        >
          Rational
        </button>
        <button
          onClick={() => setTemp("normal")}
          className={`settingsButton ${
            active === "normal" ? "bg-slate-600" : ""
          }`}
        >
          Normal
        </button>
        <button
          onClick={() => setTemp("random")}
          className={`settingsButton ${
            active === "random" ? "bg-slate-600" : ""
          }`}
        >
          Random
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;
