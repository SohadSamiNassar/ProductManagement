import { React } from "react"; 
import { Typography, Image } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";
import { Hero } from "../components/HomePage/Hero"
import { Offers } from "../components/HomePage/Offers"
import { Products } from "../pages/Products"
import "../css/Home.css" 

export const HomePage = () => {

    return (
        <>
            <Hero />
            <Products />
            <Offers />
        </>
    ); 
};
