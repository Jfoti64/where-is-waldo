// /src/components/SubmitScoreForm.jsx
import PropTypes from 'prop-types';
import styles from './SubmitScoreForm.module.css';

const SubmitScoreForm = ({ display, handleSubmit, message, user_name, setUserName }) => {
  if (!display) return null;

  return (
    <div className={styles.container}>
      <h2>Submit Your Score</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" onChange={(e) => setUserName(e.target.value)} value={user_name} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

SubmitScoreForm.propTypes = {
  display: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string,
  user_name: PropTypes.string,
  setUserName: PropTypes.func.isRequired,
};

export default SubmitScoreForm;
