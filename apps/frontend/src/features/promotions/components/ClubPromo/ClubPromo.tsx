// TODO: MOVE IT TO ADS OR BANNERS FEATURE

import styles from "./ClubPromo.module.scss";
import Button from "@/shared/components/Button/Button";
import Heading from "@/shared/components/Heading/Heading";
import Text from "@/shared/components/Text/Text";
import { ArrowRight } from "lucide-react";

const textProps = {
  fontSize: "fs14-fs16",
  fontWeight: "semiBold",
  opacity: "80",
} as const;

const benefits = [
  "Free shipping",
  "A 15% off voucher for your next purchase",
  "Access to Members Only products and sales",
  "Access to adidas Running and Training apps",
  "Special offers and promotions",
];

function ClubPromo() {
  return (
    <div className={styles.container}>
      {/* Main text */}
      <div className={styles.upContainer}>
        <Heading fontSize="fs24-fs36" tag="h2">
          Join Kicks Club Get Rewarded Today.
        </Heading>

        <Text {...textProps}>
          As kicks club member you get rewarded with what you love for doing
          what you love. Sign up today and receive immediate access to these
          Level 1 benefits:
        </Text>

        <ul className={styles.list}>
          {benefits.map((benefit) => (
            <li key={benefit}>
              <Text {...textProps}>{benefit}</Text>
            </li>
          ))}
        </ul>

        <Text {...textProps}>
          Join now to start earning points, reach new levels and unlock more
          rewards and benefits from adiClub.
        </Text>
      </div>

      {/* CTA */}
      <Button fontSize="fs14-fs14" justify="between" height="h48" width="full">
        JOIN THE CLUB
        <ArrowRight size={16} />
      </Button>
    </div>
  );
}

export default ClubPromo;
