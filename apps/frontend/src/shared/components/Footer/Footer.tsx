import styles from "./Footer.module.scss";
import Wrapper from "@/shared/components/Wrapper/Wrapper";
import Logo from "@/shared/components/Logo/Logo";

function Footer() {
  return (
    <Wrapper>
      <footer className={styles.footer}>
        <h4 className={styles.sectionHeading}>About us</h4>
        <p className={styles.aboutUs}>
          We are the biggest hyperstore in the universe. We got you all cover
          with our exclusive collections and latest drops.
        </p>

        <div className={styles.wideLogo}>
          <Logo size="full" color="light" />
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;
