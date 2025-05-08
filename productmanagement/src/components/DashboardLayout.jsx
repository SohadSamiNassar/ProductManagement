import {  Navigate } from "react-router-dom";
import { Space } from "antd";
import { useAuth } from "../auth/useAuth";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";
import { SideMenu } from "./SideMenu";
import { PageContent } from "./PageContent";
import "../App.css";

export const DashboardLayout = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <div className="App">
            <AppHeader />
            <Space className="content">
                <SideMenu>
                </SideMenu>

                <PageContent>
                </PageContent>
            </Space>
            <AppFooter />
         
        </div>
    );
};
