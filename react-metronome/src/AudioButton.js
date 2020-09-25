import React from "react";

function Plauer() {
  let audio = new Audio("./audio/Claves.mp3");

  const start = () => {
    let i = 0;
    setTimeout(function run() {
      console.log(i++);
      audio.play();
      setTimeout(run, 333);
    }, 333);
  };

  return (
    <div>
      <button onClick={start}>Play</button>
    </div>
  );
}

export default Plauer;
