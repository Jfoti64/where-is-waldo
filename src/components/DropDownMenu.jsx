// /src/components/DropDownMenu.jsx
import PropTypes from 'prop-types';
import styles from './DropDownMenu.module.css';

const DropDownMenu = ({ display, position, menuWidth, menuHeight, handleCharacterSelect }) => {
  if (!display) return null;

  const { top, left } = position;

  return (
    <div
      className={styles.container}
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        width: `${menuWidth}px`, // Ensure this matches the menuWidth used in GameImage
        height: `${menuHeight}px`, // Ensure this matches the menuHeight used in GameImage
      }}
    >
      <button className={styles.button} onClick={() => handleCharacterSelect('Waldo')}>
        Waldo
      </button>
      <button className={styles.button} onClick={() => handleCharacterSelect('Odlaw')}>
        Odlaw
      </button>
      <button className={styles.button} onClick={() => handleCharacterSelect('Wizard')}>
        Wizard
      </button>
    </div>
  );
};

DropDownMenu.propTypes = {
  display: PropTypes.bool.isRequired,
  menuWidth: PropTypes.number.isRequired,
  menuHeight: PropTypes.number.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
  handleCharacterSelect: PropTypes.func.isRequired,
};

export default DropDownMenu;
