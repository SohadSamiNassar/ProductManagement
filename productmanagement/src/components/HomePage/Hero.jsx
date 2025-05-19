import { React } from "react"; 
import {  Image } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";
import image from "../../assets/Cosmetics.png"

export const Hero = () => {

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
