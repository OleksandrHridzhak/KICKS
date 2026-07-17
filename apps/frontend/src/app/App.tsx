import { Routes, Route } from "react-router-dom";
import CatalogPage from "@/app/pages/CatalogPage";
import HomePage from "@/app/pages/HomePage";
import LoginPage from "@/app/pages/LoginPage";
import RegistrationPage from "@/app/pages/RegistrationPage";
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
