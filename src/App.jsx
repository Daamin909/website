import React from "react";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <div
      className="min-h-screen bg-[#0f0f0f] 
  bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] 
  bg-[length:45px_45px]"
    >
      <Navbar />
    </div>
  );
};

export default App;
