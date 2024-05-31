// /src/components/Game.jsx
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import GameImage from '../components/GameImage';
import Timer from '../components/Timer';
import { fetchCharacterCount } from '../services/api';

const Game = () => {
  // State to store time
  const [time, setTime] = useState(0);

  // State to check if stopwatch is running
  const [isRunning, setIsRunning] = useState(true);

  // State to store the count of characters
  const [characterCount, setCharacterCount] = useState(0);

  // State to store found characters
  const [foundCharacters, setFoundCharacters] = useState([]);

  useEffect(() => {
    const getCharacterCount = async () => {
      try {
        const response = await fetchCharacterCount();
        const count = response.count;
        setCharacterCount(count);
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    };
    getCharacterCount();
  }, []);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // Setting time from 0 to 1 every 10 milliseconds using JavaScript setInterval method
      intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  const handleCharacterFound = (character, position) => {
    setFoundCharacters([...foundCharacters, { name: character, position }]);
    if (foundCharacters.length + 1 >= characterCount) {
      setIsRunning(false); // Stop the timer when all characters are found
      console.log('You win!');
    }
  };

  return (
    <>
      <Sidebar />
      <GameImage onCharacterFound={handleCharacterFound} foundCharacters={foundCharacters} />
      <Timer minutes={minutes} seconds={seconds} milliseconds={milliseconds} />
    </>
  );
};

export default Game;
