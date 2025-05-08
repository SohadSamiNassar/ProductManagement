import { React } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../auth/useAuth";
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
const { Header, Content, Footer } = Layout;
 

export const HomePage = () => {
    const { user, logout } = useAuth();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
     
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={[
                        { label: "Home", key: "settings" },
                        { label: "Products", key: "Product"}
                    ]}
                    style={{ flex: 1, minWidth: 0 }}
                />
                {!!user ? (<div>
                    <Link to="/dashboard/settings">
                        <Button>
                            {"dashboard"}
                        </Button>
                    </Link>
                    <Link to="/login">

                        <Button
                            key={"logout"}
                            onClick={logout}>
                            {"logout"}
                        </Button>

                    </Link>
                </div>)
                    :
                    (<Link to="/login">
                        <Button>
                            {"login"}
                        </Button>
                    </Link>)
                }
            </Header>
            <Content style={{ padding: '0' }}>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >

                   
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                {new Date().getFullYear()} Created by Sohad Nassar
            </Footer>
        </Layout>
    ); 
};
