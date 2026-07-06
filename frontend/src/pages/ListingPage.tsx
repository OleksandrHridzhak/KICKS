import styles from "./ListingPage.module.css";

import Banner from "@/features/Banner/Banner";
import Wrapper from "@/shared/Wrapper/Wrapper";
import ProductCard from "@/shared/ProductCard/ProductCard";
import CatalogHeader from "@/features/CatalogHeader/CatalogHeader";
import CatalogFilter from "@/features/CatalogFilter/CatalogFilter";

function ListingPage() {
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

export default ListingPage;
