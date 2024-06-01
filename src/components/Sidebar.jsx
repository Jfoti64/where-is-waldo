import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h1>Find them all</h1>
      <div className={styles.character_examples}>
        <div>
          <h2 className={styles.character_name}>Waldo</h2>
          <img
            src="/assets/WaldoUp.png" // Corrected path
            alt="Waldo"
            className={styles.character_icon}
          />
        </div>
        <div>
          <h2 className={styles.character_name}>Odlaw</h2>
          <img
            src="/assets/odlaw.gif" // Corrected path
            alt="Odlaw"
            className={styles.character_icon}
          />
        </div>
        <div>
          <h2 className={styles.character_name}>Wizard</h2>
          <img
            src="/assets/wizard.gif" // Corrected path
            alt="Wizard"
            className={styles.character_icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
