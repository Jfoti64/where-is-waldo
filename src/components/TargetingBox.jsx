import styles from './TargetingBox.module.css';
import PropTypes from 'prop-types';

const TargetingBox = ({ display, position }) => {
  if (!display) return null;

  const { top, left } = position;

  return (
    <div
      className={styles.circle}
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
      }}
    ></div>
  );
};

TargetingBox.propTypes = {
  display: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
};

export default TargetingBox;
