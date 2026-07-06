import styles from "./CatalogFilter.module.css";
import Button from "@/shared/Button/Button";

const sizeOptions = [
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

function CatalogFilter() {
  return (
    <div className={styles.catalogFilter}>
      <h2 className={styles.catalogHeading}>Filters</h2>

      <div className={styles.filterSection}>
        <h3 className={styles.sectionHeading}>REFINE BY</h3>
        <div className={styles.sectionBody}>
          <Button variant="primary" width="fit">
            Mans
          </Button>
          <Button variant="primary" width="fit">
            Casual
          </Button>
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.sectionHeading}>SIZE</h3>

        <div className={styles.sectionBody}>
          {sizeOptions.map((size) => (
            <Button variant="ghost" width="square" height="h48" key={size}>
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.sectionHeading}>COLOR</h3>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.sectionHeading}>TYPE</h3>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.sectionHeading}>GENDER</h3>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.sectionHeading}>PRICE</h3>
      </div>
    </div>
  );
}

export default CatalogFilter;
