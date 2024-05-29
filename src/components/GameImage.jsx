// /src/components/GameImage.jsx
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import styles from './GameImage.module.css';
import TargetingBox from './TargetingBox';

const GameImage = () => {
  const [display, setDisplay] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({ top: 0, left: 0 });
  const [targetBoxPosition, setTargetBoxPosition] = useState({ top: 0, left: 0 });

  const menuWidth = 100; // Width of the dropdown menu
  const menuHeight = 100; // Height of the dropdown menu

  const handleClick = (event) => {
    const imgRect = event.target.getBoundingClientRect();

    setDisplay(!display);
    setDropDownPosition({
      top: event.clientY - imgRect.top + 30,
      left: event.clientX - imgRect.left - 60,
    });

    setTargetBoxPosition({
      top: event.clientY - imgRect.top - 17, // Center the circle (17px = 34px/2)
      left: event.clientX - imgRect.left - 17, // Center the circle (17px = 34px/2)
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
      <DropDownMenu
        display={display}
        position={dropDownPosition}
        menuHeight={menuHeight}
        menuWidth={menuWidth}
      />
      <TargetingBox display={display} position={targetBoxPosition} />
    </div>
  );
};

export default GameImage;
