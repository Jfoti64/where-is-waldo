// src/components/Home.jsx
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Home</h2>
      <Link to="/game" className={styles.link}>
        Play Game
      </Link>
      <Link to="/topScores" className={styles.link}>
        Top Scores
      </Link>
    </div>
  );
};

export default Home;
