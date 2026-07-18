import styles from "./NotFoundPage.module.scss";

function NotFoundPage() {
  return (
    <div className={styles.page}>
      <p className={styles.text}>404 The page wasn't found</p>
    </div>
  );
}

export default NotFoundPage;
