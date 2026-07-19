import styles from "./AuthLayout.module.scss";
import ClubPromo from "@/features/promotions/components/ClubPromo/ClubPromo";
import type React from "react";

export type AuthLayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formSection}>{children}</div>
        <div className={styles.promoSection}>
          <ClubPromo />
        </div>
      </div>
    </>
  );
}
export default AuthLayout;
