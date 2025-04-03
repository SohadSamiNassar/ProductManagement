import { React } from "react"; 
import image from "../assets/react.svg"
import { useAuth } from "../auth/useAuth";
import { Image, Typography, Space, Button } from "antd";

export const AppHeader = () => {
    const { user, logout } = useAuth();

    return (
        <div className="AppHeader">
            <Image src={image} width={40} />
            <Typography.Title> Dashboard</Typography.Title>
            <Space>
                {!!user && (
                    <Button
                        key={"logout"}
                        onClick={logout}
                        sx={{ my: 2, color: "white", display: "block" }}
                    >
                        {"logout"}
                    </Button>
                )}
            </Space>
        </div>

    );
}; 
