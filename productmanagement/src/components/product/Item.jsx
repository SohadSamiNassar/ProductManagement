import React, { useState } from "react";
import { Typography, Image } from 'antd';

export const Item = (props) => {
   
    return (
        <div className="item">
            <Image src={props.image} />
            <p>{props.name}</p>
            <div className="item.prices">
                <div className="item.price-new">
                    {props.price }
                </div>
                <div className="item.price-old">
                    {props.price}
                </div>
            </div>
      </div>
    );
}; 
 
