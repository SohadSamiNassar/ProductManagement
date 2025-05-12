import { React } from "react"; 
import image from "../assets/react.svg"
import { useAuth } from "../auth/useAuth";
import { Link } from 'react-router-dom';
import { Image, Typography, Space, Button } from "antd";

export const AppHeader = () => {
    const { user, logout } = useAuth();

    return (
        <div className="AppHeader">
            <Image src={image} width={40} />
            <Typography.Title> Dashboard</Typography.Title>
            <Space>
                {!!user && (
                    <div>
                    <Link to="/">
                      <Button>
                          {"Home Page"}
                      </Button>
                    </Link>
                    <Button
                        key={"logout"}
                        onClick={logout}>
                        {"logout"}
                        </Button>
                    </div>
                )}
            </Space>
        </div>
    );
}; 
