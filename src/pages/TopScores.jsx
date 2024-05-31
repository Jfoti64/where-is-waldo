import styles from './TopScores.module.css';
import { fetchTopScores } from '../services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    const getScores = async () => {
      try {
        const response = await fetchTopScores();
        setTopScores(response); // Set the state with the fetched scores
      } catch (error) {
        console.error('Error fetching scores:', error);
      }
    };
    getScores();
  }, []);

  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
      <div className={styles.container}>
        <h2>Top Scores</h2>
        <ul>
          {topScores.map((score) => {
            const time = score.time;

            // Minutes calculation
            const minutes = Math.floor((time % 360000) / 6000);

            // Seconds calculation
            const seconds = Math.floor((time % 6000) / 100);

            // Milliseconds calculation
            const milliseconds = time % 100;

            return (
              <li key={score._id}>
                <p>Username: {score.user_name}</p>
                <p className={styles.time}>
                  {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}:
                  {milliseconds.toString().padStart(2, '0')}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
