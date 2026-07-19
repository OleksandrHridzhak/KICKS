import styles from "./SavingsBanner.module.scss";
import Heading from "@/shared/components/Heading/Heading";
import Text from "@/shared/components/Text/Text";
import Link from "@/shared/components/Link/Link";

function SavingsBanner() {
  return (
    <div className={styles.container}>
      <Heading tag="h2" fontSize="fs24-fs32" uppercase={false}>
        Saving to celebrate
      </Heading>
      <Text tag="p" fontSize="fs12-fs14" opacity="80">
        Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
      </Text>
      <Text tag="p" fontSize="fs14-fs16" opacity="80">
        <Link to="/registration" variant="underline" fontWeight="semiBold">
          Join us
        </Link>
        {" or "}
        <Link to="/login" variant="underline" fontWeight="semiBold">
          Sign-in
        </Link>
      </Text>
    </div>
  );
}

export default SavingsBanner;
