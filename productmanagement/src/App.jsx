import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { HomeLayout } from "./pages/HomeLayout";
import { AboutUs } from "./pages/AboutUs";
import { ProductTable } from "./components/product/ProductTable";
import { Products } from "./pages/Products";
import { SettingsPage } from "./components/Settings";
import { DashboardLayout } from "./components/DashboardLayout";


 
export default function App() { 
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route path="" element={<HomePage />} />
                <Route path="About" element={<AboutUs />} />
                <Route path="Product" element={<Products />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="settings" element={<SettingsPage />} />
                <Route path="Product" element={<ProductTable />} />
            </Route>
        </Routes>
    );
}