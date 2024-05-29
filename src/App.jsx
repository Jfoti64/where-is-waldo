import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'; // Import the CSS file
import Home from './pages/Home';
import Game from './pages/Game';

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
