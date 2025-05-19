import React, { useState } from "react";
import { Image, Popover } from 'antd';
import "../../css/item.css" 


export const Item = (props) => {
    const content = (
        <div>
            <p>More detailed description</p>
            <p>With additional info</p>
        </div>
    );
    return (
        <div className="item">
            <Image src={props.image} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    $ {props.price }
                </div>
                {/*<div className="item-price-old">*/}
                {/*   $  {props.price}*/}
                {/*</div>*/}
            </div>
      </div>
    );
}; 
 
