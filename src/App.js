import React, { useState, useEffect } from "react";
import "./App.css";
import ImgGrid from "./components/ImgGrid";
import styles from 'styled-components';

const MasterDiv = styles.div`
  background: #351C75
`;
const SpacedH1 = styles.h1`
  padding-top: 50px
`;



function App() {
  return (
    <MasterDiv className="App">
      <SpacedH1>GREETINGS and welcome to NASA</SpacedH1>
      <h2>Below is todays image! </h2>

      <ImgGrid />
    </MasterDiv>
  );
}

export default App;
