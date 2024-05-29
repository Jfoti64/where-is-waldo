import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/game">Play Game</Link>
    </div>
  );
};

export default Home;
