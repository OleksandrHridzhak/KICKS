import styles from "./NewsletterPromo.module.scss";
import Wrapper from "@/shared/components/Wrapper/Wrapper";
import Logo from "@/shared/components/Logo/Logo";
import Button from "@/shared/components/Button/Button";
import Input from "@/shared/components/Input/Input";
import clsx from "clsx";

interface NewsletterPromoProps {
  className?: string;
}

function NewsletterPromo({ className }: NewsletterPromoProps) {
  return (
    <Wrapper>
      <div className={clsx(styles.container, className)}>
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
              classNameInput={styles.emailInput}
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
    </Wrapper>
  );
}

export default NewsletterPromo;
