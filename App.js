//TASK ONE

// import { useState, useEffect } from 'react'

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//       console.log(count)
//     }, 1000);
//   });

//   return <h1>I've rendered {count} times!</h1>;
// }

// export default Timer







//USE CASE SCENARIO

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    console.log("I re-rendered!");
  }, [update]);

  useEffect(() => {
    // Add didCancel to ensure your function won't be interuppted and will complete the full cycle without outside interferance. 
    let didCancel = false;

    async function fetchDog() {
      if (!didCancel) {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => setDogImage(data.message));
      }
    }
    fetchDog();

    return () => {
      didCancel = true;
    };
  }, [update]);


  return (
    <div className="App">
      {dogImage && <img src={dogImage} alt="dogImage"></img>}
      <button onClick={() => setUpdate((prevState) => !prevState)}>
        Let me see another dog
      </button>
    </div>
  );
}

export default App;