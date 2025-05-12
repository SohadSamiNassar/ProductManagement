import React from "react";
import { Menu } from "antd"; 
import {  useNavigate } from "react-router-dom";
import { AppstoreOutlined, ShopOutlined } from "@ant-design/icons";


export const SideMenu = () => {
    const navigate = useNavigate(); 
    return (
        <div className="SideMenu">
            <Menu
                onClick={(item) => { navigate(item.key) }}
                style={{ width: 256 }}
                defaultSelectedKeys={['settings']}
                mode='vertical'

                items={[
                    { label: "Home", key: "settings", icon: <AppstoreOutlined />},
                    { label: "Products", key: "Product", icon: <ShopOutlined /> }

                ]}></Menu>
        </div>

    );
}; 
