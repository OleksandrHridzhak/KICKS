import styles from "./NewsletterPromo.module.scss";
import Wrapper from "@/shared/components/Wrapper/Wrapper";
import Logo from "@/shared/components/Logo/Logo";
import Heading from "@/shared/components/Heading/Heading";
import Text from "@/shared/components/Text/Text";
import Button from "@/shared/components/Button/Button";
import Input from "@/shared/components/Input/Input";
import clsx from "clsx";
import { PlusCircle } from "lucide-react";

interface NewsletterPromoProps {
  className?: string;
}

function NewsletterPromo({ className }: NewsletterPromoProps) {
  return (
    <Wrapper>
      <div className={clsx(styles.container, className)}>
        <div className={styles.subscriptionPart}>
          <Heading tag="h2" fontSize="fs32-fs48" color="white" >Join our KicksPlus Club & get 15% off </Heading>

          <Text tag="p" fontSize="fs16-fs20" color="inverse" fontWeight="semiBold" >Sign up for free! Join the community. </Text>

          <form className={styles.subscriptionForm}>
            <Input
              type="email"
              className={styles.emailInputGroup}
              classNameInput={styles.emailInput}
              placeholder="Enter email"
            />
            <Button width="fit" height="h40-h48" fontSize="fs14-fs14">
              Submit
            </Button>
          </form>
        </div>
        <div className={styles.logoWrapper}>
          <div className={styles.logoPart}>
            <Logo size="big" color="light" />
            <PlusCircle className={styles.plusIcon} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default NewsletterPromo;
