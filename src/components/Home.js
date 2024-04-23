import React from "react";
import { name, city } from "../data/data.js";

const textColor = {
  color : "firebrick"
}

function Home() {
  // update the JSX being returned!
  return <div id="home">Home
  <h1 style={textColor}>{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
