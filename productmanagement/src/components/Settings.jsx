import { ShoppingCartOutlined,ShoppingOutlined,UserOutlined, } from "@ant-design/icons";
import { Typography, Space, Card, Statistic } from "antd";

export const SettingsPage = () => {
    return(
    <div>
        <Typography.Title level={4}> Dashboard</Typography.Title>
        <Space direction="horizontal">
                <DashboardCard icon={<ShoppingOutlined style={{ color: "green", backgroundColor:"rgb(203 248 203)",fontSize:24,padding:8,borderRadius:20} } />} title={"Products"} value={1223} />
                <DashboardCard icon={<UserOutlined style={{ color: "green", backgroundColor: "rgb(243 243 120)", fontSize: 24, padding: 8, borderRadius: 20 }} />}  title={"Users"} value={78451 } />
        </Space>
    </div>);
};
export const DashboardCard = ({ title, value, icon }) => {
    return (
        <Card>
            {icon}
            <Statistic title={title} value={value} />
        </Card>
    );
};
//const RecentProducts = () => {
//    return (
      
//    );
//}; 
