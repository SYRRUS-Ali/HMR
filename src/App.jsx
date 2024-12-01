import React, { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white text-center">
      <div>
        <h1 className="text-4xl font-bold mb-4 tracking-wide">
          🌟 Super Pro Frontend - HMR Rocks!
        </h1>
        <p className="text-lg mb-6">
          Edit <code>src/App.jsx</code> and save to test Hot Module Replacement (HMR).
        </p>
        <div className="mt-6">
          <button
            className={`px-6 py-3 rounded-lg shadow-md text-lg font-semibold transition-all ${
              clicked
                ? "bg-green-500 hover:bg-green-600"
                : "bg-white text-purple-600 hover:bg-purple-100"
            }`}
            onClick={() => handleButtonClick()}
            disabled={clicked}
          >
            {clicked ? "HMR is working!" : "Click Me to Test"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
