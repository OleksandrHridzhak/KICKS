import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
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
