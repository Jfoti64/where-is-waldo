import styles from './Timer.module.css';
import PropTypes from 'prop-types';

const Timer = ({ minutes, seconds, milliseconds }) => {
  return (
    <p className={styles.timer}>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}:
      {milliseconds.toString().padStart(2, '0')}
    </p>
  );
};

Timer.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  milliseconds: PropTypes.number.isRequired,
};

export default Timer;
