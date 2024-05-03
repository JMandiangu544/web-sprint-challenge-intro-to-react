import React, { useState } from 'react';

function Character({ character }) {
  // State to hold whether the homeworld is rendering or not
  const [showPlanet, setShowPlanet] = useState(false);
  // Toggle click handler to show or remove the homeworld
  const togglePlanet = () => {
    setShowPlanet(!showPlanet);
  };


  return (
    <div className="character-card">
      <h3 className="character-name">{character.name}</h3>
      <p>
        Planet:  
        <span className="character-planet">{}</span>
      </p>
      
      <button onClick={togglePlanet}>
        {showPlanet ? 'Hide Planet' : 'Show Planet'}
      </button>
     
    </div>
  );
}

export default Character;
