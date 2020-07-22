import React, { useState } from "react";
import MadlibsForm from "./MadlibsForm";

function Madlibs() {
  const [story, setStory] = useState("");
  const handleReset = () => {
    setStory("");
  };
  const makeStory = (noun, noun2, adj, col) => {
    setStory(`There was a ${col} ${noun} who loved a ${adj} ${noun2}`);
  };
  console.log("story");
  if (story) {
    return (
      <div>
        <p>{story}</p>
        <button onClick={handleReset}>reset</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Madlibs!</h1>
      <MadlibsForm makeStory={makeStory}></MadlibsForm>
    </div>
  );
}

export default Madlibs;
