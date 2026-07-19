import styles from "./CartPage.module.scss";
import Wrapper from "@/shared/components/Wrapper/Wrapper";
import SavingsBanner from "@/features/promotions/components/SavingsBanner/SavingsBanner";
import Card from "@/shared/components/Card/Card";
import Heading from "@/shared/components/Heading/Heading";
import Text from "@/shared/components/Text/Text";

function CartPage() {
  return (
    <Wrapper>
      <div className={styles.page}>
        <SavingsBanner />
        <Card className={styles.bagCard}>
          <Heading tag="h2" fontSize="fs24" uppercase={false}>
            Your Bag
          </Heading>
          <Text tag="p" fontSize="fs14-fs16" opacity="80">
            Items in your bag not reserved- check out now to make them yours.
          </Text>
        </Card>
      </div>
    </Wrapper>
  );
}

export default CartPage;
