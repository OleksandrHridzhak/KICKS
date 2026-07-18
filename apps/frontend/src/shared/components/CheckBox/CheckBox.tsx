import styles from "./CheckBox.module.scss";
import clsx from "clsx";
import Text from "@/shared/components/Text/Text";
import { Check } from "lucide-react";

export type CheckBoxProps = {
  children: React.ReactNode;
  fontSize: "fs14-fs16" | "fs16-fs16";
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

function CheckBox({ children, fontSize, checked, onChange }: CheckBoxProps) {
  return (
    <Text
      tag="label"
      fontSize={fontSize}
      fontWeight="semiBold"
      className={clsx(styles.checkBoxLabel)}
    >
      <input
        type="checkbox"
        className={clsx(styles.checkBoxInput)}
        checked={checked}
        onChange={onChange}
      />

      <span className={styles.checkMark}>
        <Check size={12} className={styles.checkMarkIcon} />
      </span>

      {children}
    </Text>
  );
}

export default CheckBox;
