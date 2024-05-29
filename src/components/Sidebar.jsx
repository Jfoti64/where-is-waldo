import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <h1>Find them all</h1>
      <div className={styles.characterExamples}>
        <div>
          <h2>Waldo</h2>
          <img src="src/assets/waldoUp.png" alt="Waldo" className={styles.characterIcon} />
        </div>
        <div>
          <h2>Odlaw</h2>
          <img src="src/assets/odlaw.gif" alt="Odlaw" className={styles.characterIcon} />
        </div>
        <div>
          <h2>Wizard</h2>
          <img src="src/assets/wizard.gif" alt="Wizard" className={styles.characterIcon} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
