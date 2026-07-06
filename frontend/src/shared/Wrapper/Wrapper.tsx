import styles from "./Wrapper.module.css";

function Wrapper({ children }: React.PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
