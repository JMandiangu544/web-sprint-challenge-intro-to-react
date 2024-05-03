import React, { useState } from 'react';

function Character({ character, planet }) {
  // State to hold whether the homeworld is rendering or not
  const [showPlanet, setShowPlanet] = useState(false);

  // Toggle click handler to show or remove the homeworld
  const togglePlanet = () => {
    setShowPlanet(!showHomeworld);
  };

  return (
    <div className="character-card">
      <h3 className="character-name">{character.name}</h3>
      <p>
        Planet: 
        <span className="character-planet">{planet}</span>
      </p>
      
      {/* <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birth_year}</p> */}
      {/* <button onClick={toggleHomeworld}>
        {showHomeworld ? 'Hide Homeworld' : 'Show Homeworld'}
      </button>
      {showHomeworld && ( 
        <div className="homeworld">
          <h4>Homeworld</h4>
          <p>Name: {character.homeworld.name}</p>
          <p>Climate: {character.homeworld.climate}</p>
          <p>Population: {character.homeworld.population}</p>
        </div>
      {/* )} */}
    </div>
  );
}

export default Character;
