import { React } from "react"; 
import image from "../assets/react.svg"
import { useAuth } from "../auth/useAuth";
import { Link } from 'react-router-dom';
import {
    SolutionOutlined,
    PoweroffOutlined
} from "@ant-design/icons";

import {Menu } from 'antd';

export const ProfileMenu = () => {
    const { user, logout } = useAuth();

    return (
        <Menu>
            {!!user && (
                <Menu.Item>
                    <Link to="/dashboard/settings">
                        <SolutionOutlined className="icon" style={{ paddingRight: 5 }} />
                        {"dashboard"}
                    </Link>
                </Menu.Item>)}
            <Menu.Item>
                {!!user ? (
                    <Link to="/login" key={"logout"}
                        onClick={logout}>
                        <PoweroffOutlined className="icon" style={{ paddingRight: 5 }} />
                        {"logout"}
                    </Link>) :
                    (<Link to="/login">
                        <PoweroffOutlined className="icon" style={{ paddingRight: 5 }} />
                        {"login"}
                    </Link>)
                }
            </Menu.Item>
        </Menu>

    );
}; 
