import React, { useState } from 'react';

function Character({ character }) {
  // State to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false);

  // Toggle click handler to show or hide the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };
  
  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{character.name}</h3>
      {showHomeworld && (
        <p>
          Planet:  
          <span className="character-planet">{character.planetName}</span>
        </p>
      )}
    </div>
  );
}

export default Character;
