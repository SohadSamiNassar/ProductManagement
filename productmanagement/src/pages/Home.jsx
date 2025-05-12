import { React } from "react"; 
import { Typography, Image } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";
import image from "../assets/Cosmetics.png"
import "../css/Home.css" 

export const HomePage = () => {

    return (
            <div className="hero">
                <div className="hero-left">
                    <h2> NEW ARRIVAL ONLY </h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>new</p>
                        </div>
                        <p> collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>  Latest collection   </div>
                         <ArrowRightOutlined />  
                    </div>
                </div>
                <div className="hero-right">
                <Image src={image}/>

                </div>
            </div>
    ); 
};
