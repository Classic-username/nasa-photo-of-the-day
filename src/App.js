import React, { useState, useEffect } from "react";
import "./App.css";
import ImgGrid from "./components/ImgGrid";




function App() {
  return (
    <div className="App">
      <h1>GREETINGS and welcome to NASA</h1>
      <h2>Below is todays image! </h2>

      <ImgGrid />
    </div>
  );
}

export default App;
