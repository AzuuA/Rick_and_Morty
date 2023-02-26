import { useState } from "react";

export default function RandomButton() {
  const [randomCharacter, setRandomCharacter] = useState(null);

  function getRandomCharacter() {
    fetch(`https://rickandmortyapi.com/api/character/${getRandomInt(1, 671)}`)
      .then((response) => response.json())
      .then((data) => {
        setRandomCharacter(data);
      })
      .catch((error) => {
        console.error("Error fetching random character:", error);
      });
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div>
      <button onClick={getRandomCharacter}>Random</button>
      {randomCharacter && (
        <div>
          <h2>{randomCharacter.name}</h2>
          <img src={randomCharacter.image} alt={randomCharacter.name} />
        </div>
      )}
    </div>
  );
}
