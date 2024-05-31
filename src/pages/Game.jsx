// /src/components/Game.jsx
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import GameImage from '../components/GameImage';
import Timer from '../components/Timer';
import SubmitScoreForm from '../components/SubmitScoreForm';
import { submitScore, fetchCharacterCount } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  // State to store time
  const [time, setTime] = useState(0);

  // State to check if stopwatch is running
  const [isRunning, setIsRunning] = useState(true);

  // State to store the count of characters
  const [characterCount, setCharacterCount] = useState(0);

  // State to store found characters
  const [foundCharacters, setFoundCharacters] = useState([]);

  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [displayForm, setDisplayForm] = useState(false);

  const navigate = useNavigate();

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
      setDisplayForm(true); // Display the form to submit the score
      console.log('You win!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nameToSubmit = userName.trim() === '' ? 'Anonymous' : userName;
      await submitScore(nameToSubmit, time);
      setMessage('Score submitted successfully!');
      setDisplayForm(false);
      navigate('/TopScores'); // Redirect to the home page or another protected page
    } catch (error) {
      console.error('Submission failed', error);
      setMessage('Submission failed. Please try again.');
    }
  };

  return (
    <>
      <Sidebar />
      <GameImage onCharacterFound={handleCharacterFound} foundCharacters={foundCharacters} />
      <Timer minutes={minutes} seconds={seconds} milliseconds={milliseconds} />
      <SubmitScoreForm
        display={displayForm}
        time={time}
        handleSubmit={handleSubmit}
        message={message}
        user_name={userName}
        setUserName={setUserName}
      />
    </>
  );
};

export default Game;
