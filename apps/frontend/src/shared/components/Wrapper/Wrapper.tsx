import styles from "./Wrapper.module.css";
import clsx from "clsx";

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}

function Wrapper({ children, className }: WrapperProps) {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}

export default Wrapper;
