import styles from "./Input.module.scss";
import clsx from "clsx";
import Icon from "@/shared/Icon/Icon";

type InputProps = {
  type: "text" | "email" | "password";
  className?: string;
  placeholder?: string;

  titleText?: string;
  helperText?: string;
};

function Input({
  type,
  placeholder = "",
  titleText,
  helperText,
  className,
}: InputProps) {
  return (
    <>
      <div className={styles.inputGroup}>
        {titleText && <label className={styles.label}>{titleText}</label>}

        <div className={styles.inputWrapper}>
          <input
            type={type}
            placeholder={placeholder}
            className={clsx(styles.input, className)}
          />
          {/* <div className={styles.trailingIcons}>
                    <div className={styles.infoIcon}>
                        <Icon name='info'/>
                    </div>
                    {type == "password" && <div className={styles.showHideIcon}>
                        <Icon name='eye_open'/>
                    </div>}
                </div> */}
        </div>

        {helperText && (
          <span className={styles.inputDescription}>{helperText}</span>
        )}
      </div>
    </>
  );
}

export default Input;
