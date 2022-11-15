import styles from "./Scroll.module.css";

const Scroll = () => {
  return (
    <div className={styles.progressContainer}>
      <div id="progressBar" className={styles.progressBar}></div>
      <script src="/JS/scroll.js" defer />
    </div>
  );
};

export default Scroll;
