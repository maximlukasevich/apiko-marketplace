import styles from './footer.module.css';

export const Footer = () => {
  return (
    <>
      <div className={styles.empty}> </div>
      <footer className={styles.footer}>
        <p className={styles.text}>Copyright © 2017. Privacy Policy.</p>
      </footer>
    </>
  );
};
