// /src/components/DropDownMenu.jsx
import PropTypes from 'prop-types';
import styles from './DropDownMenu.module.css';

const DropDownMenu = ({ display, position }) => {
  if (!display) return null;

  const { top, left } = position;

  return (
    <div
      className={styles.container}
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      <button>Waldo</button>
      <button>Odlaw</button>
      <button>Wizard</button>
    </div>
  );
};

DropDownMenu.propTypes = {
  display: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
};

export default DropDownMenu;
