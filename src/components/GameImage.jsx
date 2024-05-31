// /src/components/GameImage.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from './DropDownMenu';
import styles from './GameImage.module.css';
import TargetingBox from './TargetingBox';
import FoundMarker from './FoundMarker';
import { fetchCharacterByName } from '../services/api';

const GameImage = ({ onCharacterFound, foundCharacters }) => {
  const [display, setDisplay] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({ top: 0, left: 0 });
  const [targetBoxPosition, setTargetBoxPosition] = useState({ top: 0, left: 0 });
  const [clickLocation, setClickLocation] = useState({ x: 0, y: 0 });

  const menuWidth = 100; // Width of the dropdown menu
  const menuHeight = 100; // Height of the dropdown menu

  const handleImageClick = (event) => {
    const imgRect = event.target.getBoundingClientRect();

    setClickLocation({
      x: event.clientX - imgRect.left,
      y: event.clientY - imgRect.top,
    });

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

  const handleCharacterSelect = async (character) => {
    const characterSelected = await fetchCharacterByName(character);
    // Check that click location is within 15px of the stored character's location
    if (
      clickLocation.x >= characterSelected.coordinates.x - 15 &&
      clickLocation.x <= characterSelected.coordinates.x + 15 &&
      clickLocation.y >= characterSelected.coordinates.y - 15 &&
      clickLocation.y <= characterSelected.coordinates.y + 15
    ) {
      onCharacterFound(character, {
        top: characterSelected.coordinates.y - 40,
        left: characterSelected.coordinates.x - 15,
      });
      console.log(`Found: ${character}`);
    } else {
      console.log('Not found');
    }
    setDisplay(false); // Hide the dropdown after selection
  };

  return (
    <div className={styles.container}>
      <img
        onClick={handleImageClick}
        src="src/assets/whereswaldo.jpg"
        alt="where's Waldo game"
        className={styles.image}
      />
      <DropDownMenu
        display={display}
        position={dropDownPosition}
        menuHeight={menuHeight}
        menuWidth={menuWidth}
        handleCharacterSelect={handleCharacterSelect}
      />
      <TargetingBox display={display} position={targetBoxPosition} />
      {foundCharacters.map((character, index) => (
        <FoundMarker key={index} found={true} position={character.position} />
      ))}
    </div>
  );
};

GameImage.propTypes = {
  onCharacterFound: PropTypes.func.isRequired,
  foundCharacters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default GameImage;
