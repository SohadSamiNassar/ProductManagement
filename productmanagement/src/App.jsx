import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { ProductTable } from "./components/product/ProductTable";
import { SettingsPage } from "./components/Settings";
import { DashboardLayout } from "./components/DashboardLayout";
import { HomeLayout } from "./components/HomeLayout";
import useToken from './auth/useToken';
import "./App.css";

 
export default function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <LoginPage setToken={setToken} />
    }
    return (
        <Routes> 
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="settings" element={<SettingsPage />} />
                <Route path="Product" element={<ProductTable />} />
            </Route>
        </Routes>
    );
}