import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
