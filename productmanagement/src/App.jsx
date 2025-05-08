import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { ProductTable } from "./components/product/ProductTable";
import { SettingsPage } from "./components/Settings";
import { DashboardLayout } from "./components/DashboardLayout";


 
export default function App() { 
    return (
        <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="settings" element={<SettingsPage />} />
                <Route path="Product" element={<ProductTable />} />
            </Route>
        </Routes>
    );
}