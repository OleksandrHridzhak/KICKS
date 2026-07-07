import styles from "./CatalogPage.module.css";

import Banner from "@/shared/components/Banner/Banner";
import Wrapper from "@/shared/components/Wrapper/Wrapper";
import ProductCard from "@/features/products/ProductCard/ProductCard";
import CatalogHeader from "@/features/products/CatalogHeader/CatalogHeader";
import CatalogFilter from "@/features/products/CatalogFilter/CatalogFilter";

function CatalogPage() {
  return (
    <>
      <main>
        <Banner />

        <Wrapper>
          <CatalogHeader />
          <div className={styles.catalog}>
            <div className={styles.filter}>
              <CatalogFilter />
            </div>

            <div className={styles.productListWrapper}>
              <div className={styles.productList}>
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
                <ProductCard
                  name="ADIDAS 4DFWD X PARLEY RUNNING SHOES"
                  price={230}
                  productUrl="/"
                  imageUrl="/item.jpg"
                />
              </div>
              <nav className={styles.pagination}></nav>
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  );
}

export default CatalogPage;
