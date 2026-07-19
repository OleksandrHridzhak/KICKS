import styles from "./Input.module.scss";
import clsx from "clsx";

type InputProps = {
  type: "text" | "email" | "password";
  className?: string;
  classNameInput?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  titleText?: string;
  helperText?: string;
};

function Input({
  type,
  placeholder = "",
  value,
  onChange,
  titleText,
  helperText,
  className,
  classNameInput,
}: InputProps) {
  return (
    <div className={clsx(styles.inputGroup, className)}>
      {titleText && <label className={styles.label}>{titleText}</label>}

      <div className={styles.inputWrapper}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(styles.input, classNameInput)}
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
  );
}

export default Input;
