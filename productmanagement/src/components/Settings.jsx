import { ShoppingCartOutlined,ShoppingOutlined,UserOutlined, } from "@ant-design/icons";
import { Typography, Space, Card, Statistic } from "antd";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const SettingsPage = () => {
    return(
    <div>
        <Typography.Title level={4}> Dashboard</Typography.Title>
        <Space direction="horizontal">
                <DashboardCard icon={<ShoppingOutlined style={{ color: "green", backgroundColor: "rgb(203 248 203)", fontSize: 27, padding: 15, borderRadius: 30, marginRight: 12 }} />} title={"Products"} value={1223} />
                <DashboardCard icon={<UserOutlined style={{ color: "green", backgroundColor: "rgb(243 243 120)", fontSize: 27, padding: 15, borderRadius: 30, marginRight:12 }} />}  title={"Users"} value={78451 } />
            </Space>
            {dashchart()}

     </div>
    );
};
export const DashboardCard = ({ title, value, icon }) => {
    return (
        <Card className="statisticCard">
            {icon}
            <Statistic title={title} value={value} />
        </Card>
    );
};

function dashchart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Line Chart',
            },
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.random()*1000),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => Math.random() * 1000),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Card style={{ width: 500, height: 350, marginTop:10 }}><Line options={options} data={data} /></Card>;
}
 
