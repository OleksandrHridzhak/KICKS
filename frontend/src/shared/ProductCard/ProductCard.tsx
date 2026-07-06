import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

import Button from "@/shared/Button/Button";

type BadgeType =
  | { type: "text"; label: "New" | "Sale" | "Exclusive" }
  | { type: "discount"; value: number };

type ProductCardProps = {
  imageUrl: string;
  name: string;
  price: number;
  priceBeforeDiscount?: number;
  productUrl: string;
  badge?: BadgeType;
};

function ProductCard({
  imageUrl,
  name,
  price,
  priceBeforeDiscount,
  productUrl,
  badge,
}: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <Link to={productUrl} className={styles.productCardLink}>
        <div className={styles.productImageWrapper}>
          <div className={styles.imageBox}>
            <img src={imageUrl} alt={name} className={styles.productImage} />
            <span className={styles.productBadge}>New</span>
          </div>
        </div>
        <h3 className={styles.productName}>{name}</h3>
      </Link>
      <Button
        variant="secondary"
        href={productUrl}
        height="h40-h48"
        fontSize="fs12-fs14"
        borderRadius="br8"
        isFullWidth
        className={styles.addToCartButton}
      >
        VIEW PRODUCT - {price}
      </Button>
    </div>
  );
}

export default ProductCard;
