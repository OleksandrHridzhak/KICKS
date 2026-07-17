import styles from './ClubPromo.module.scss';
import Button from '@/shared/components/Button/Button';
import { ArrowRight } from 'lucide-react';

function ClubPromo() {
  return (
    <div className={styles.container}>
      <div className={styles.upContainer}>
        <h2 className={styles.title}>Join Kicks Club Get Rewarded Today.</h2>

        <p className={styles.text}>
          As kicks club member you get rewarded with what you love for doing what you love.
          Sign up today and receive immediate access to these Level 1 benefits:
        </p>

        <ul className={styles.list}>
          <li>Free shipping</li>
          <li>A 15% off voucher for your next purchase</li>
          <li>Access to Members Only products and sales</li>
          <li>Access to adidas Running and Training apps</li>
          <li>Special offers and promotions</li>
        </ul>

        <p className={styles.text}>
          Join now to start earning points, reach new levels and unlock more rewards and
          benefits from adiClub.
        </p>
      </div>

      <Button fontSize="fs14-fs14" justify='between' height='h48' width='full'>
        JOIN THE CLUB
        <ArrowRight size={16} className={styles.buttonArrow} />
      </Button>
    </div>
  );
}

export default ClubPromo;