import React, { useState, useEffect } from "react";
import "./App.css";
import ImgGrid from "./components/ImgGrid";




function App() {
  return (
    <div className="App">
      <h1>GREETINGS and welcome to NASA</h1>
      <h2>Below are some images </h2>

      <ImgGrid />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
