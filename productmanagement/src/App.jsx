import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { ProductTable } from "./components/product/ProductTable";
import { SettingsPage } from "./components/Settings";
import { DashboardLayout } from "./components/DashboardLayout";
import { HomeLayout } from "./components/HomeLayout";
import "./App.css";

export default function App() {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="settings" element={<SettingsPage />} />
                <Route path="Product" element={<ProductTable />} />
            </Route>
        </Routes>
    );
}