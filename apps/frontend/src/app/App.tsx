import { Routes, Route } from "react-router-dom";
import CatalogPage from "@/app/pages/CatalogPage";
import HomePage from "@/app/pages/HomePage";
import LoginPage from "@/app/pages/LoginPage";
import NotFoundPage from "@/app/pages/NotFoundPage";
import RegistrationPage from "@/app/pages/RegistrationPage";
import CheckoutPage from "@/app/pages/CheckoutPage";
import CartPage from "@/app/pages/CartPage";
import MainLayout from "@/app/layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-page" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} /> 
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
