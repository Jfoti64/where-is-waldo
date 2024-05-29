// /src/components/GameImage.jsx
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import styles from './GameImage.module.css';

const GameImage = () => {
  const [display, setDisplay] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleClick = (event) => {
    const imgRect = event.target.getBoundingClientRect();
    setDisplay(!display);
    setPosition({
      top: event.clientY - imgRect.top,
      left: event.clientX - imgRect.left,
    });
  };

  return (
    <div className={styles.container}>
      <img
        onClick={handleClick}
        src="src/assets/whereswaldo.jpg"
        alt="where's Waldo game"
        className={styles.image}
      />
      <DropDownMenu display={display} position={position} />
    </div>
  );
};

export default GameImage;
