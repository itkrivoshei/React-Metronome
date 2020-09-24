import React from "react";

function Plauer() {
  let audio = new Audio("/audio/Claves.mp3");

  const start = () => {
    setInterval(start, 333);
    audio.play();
  };

  return (
    <div>
      <button onClick={start}>Play</button>
    </div>
  );
}

export default Plauer;
