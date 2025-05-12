import { React } from "react"; 
import { ProfileMenu } from "../components/ProfileMenu";
import image from "../assets/react.svg"
import { UserOutlined } from "@ant-design/icons";
import { PageContent } from "../components/PageContent";
import { useNavigate } from "react-router-dom";

import { Breadcrumb, Layout, Menu, theme, Button, Avatar, Dropdown, Image } from 'antd';
const { Header, Content, Footer } = Layout;


export const HomeLayout = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <div className="demo-logo" style={{ paddingRight: 50 }} >
                    <Image src={image} width={40} />
                </div>
                <Menu
                    onClick={(item) => { navigate(item.key) }}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/']}
                    items={[
                        { label: "Home", key: "/" },
                        { label: "Products", key: "Product" },
                        { label: "About Us", key: "About" }
                    ]}
                    style={{ flex: 1, minWidth: 0, paddingLeft: 50 }}
                />
                <Dropdown overlay={<ProfileMenu />}>
                    <Avatar icon={<UserOutlined />} />
                </Dropdown>
            </Header>
            <Content style={{ padding: '0' }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380
                    }}>

                    <PageContent>
                    </PageContent>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                {new Date().getFullYear()} Created by Sohad Nassar
            </Footer>
        </Layout>
    );
};
