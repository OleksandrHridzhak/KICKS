import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";
import NewsletterPromo from "@/features/promotions/components/NewsletterPromo/NewsletterPromo";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

function MainLayout() {
  return (
    <div className={styles.layoutWrapper} >
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <NewsletterPromo className={styles.newsletterOverlap} />
      <Footer />
    </div>
  );
}

export default MainLayout;
