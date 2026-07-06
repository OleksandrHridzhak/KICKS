import styles from "./CatalogHeader.module.css";
import Button from "@/shared/Button/Button";
import Icon from "@/shared/Icon/Icon";

function CatalogHeader() {
  return (
    <div className={styles.catalogHeader}>
      <div className={styles.catalogActions}>
        <Button variant="ghost" className={styles.filterButton}>
          Filters
        </Button>
        <Button variant="ghost" width="widthFull" className={styles.sortButton}>
          Trending
          <Icon name="chevron_down" />
        </Button>
      </div>

      <div className={styles.catalogInfo}>
        <h1 className={styles.catalogHeadign}>Life Style Shoes</h1>
        {/* Is it better to make it a span? */}
        <p className={styles.catalogItemNumber}>122 items</p>
      </div>
    </div>
  );
}

export default CatalogHeader;
