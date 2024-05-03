import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  // State to hold the data from the API
  const [characters, setCharacters] = useState([]);

  // Effect to fetch data from both endpoints and update state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [planetsResponse, peopleResponse] = await Promise.all([
          axios.get(urlPlanets),
          axios.get(urlPeople)
        ]);
        // Combine data from both endpoints
        const combinedData = combineData(planetsResponse.data, peopleResponse.data);
        // Update state with the combined data
        setCharacters(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Function to combine data obtained from different sources
  const combineData = (planets, people) => {
    // Combine logic here based on requirements
    // For example, map over people and enhance with corresponding planet data
    return people.map(person => {
      const planet = planets.find(planet => planet.id === person.homeworld);
      return {
        ...person,
        planetName: planet ? planet.name : 'Unknown'
      };
    });
  };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* Map over the characters in state and render a Character component for each */}
      {characters.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
