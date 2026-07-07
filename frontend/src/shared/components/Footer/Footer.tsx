import styles from "./Footer.module.scss";
import Wrapper from "@/shared/components/Wrapper/Wrapper";
import Logo from "@/shared/components/Logo/Logo";
import Button from "@/shared/components/Button/Button";
import Input from "@/shared/components/Input/Input";

function Footer() {
  return (
    <Wrapper>
      <footer className={styles.footer}>
        <div className={styles.topPart}>
          <div className={styles.subscriptionPart}>
            <h3 className={styles.suscriptionTitle}>
              Join our KicksPlus Club & get 15% off
            </h3>
            <p className={styles.subscriptionDescription}>
              Sign up for free! Join the community.
            </p>

            <form className={styles.subscriptionForm}>
              <Input
                type="email"
                className={styles.emailInput}
                placeholder="Enter email"
              />

              <Button width="fit" height="h40-h48" fontSize="fs14-fs14">
                Submit
              </Button>
            </form>
          </div>
          <div className={styles.logoPart}>
            <Logo size="big" color="light" />
          </div>
        </div>

        <div className={styles.bottomPart}>
          <h4 className={styles.sectionHeading}>About us</h4>
          <p className={styles.aboutUs}>
            We are the biggest hyperstore in the universe. We got you all cover
            with our exclusive collections and latest drops.
          </p>

          <div className={styles.wideLogo}>
            <Logo size="full" color="light" />
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;
