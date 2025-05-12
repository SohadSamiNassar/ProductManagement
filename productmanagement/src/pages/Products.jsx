import React, { useState } from "react";
import { Typography } from 'antd';
import { Item } from "../components/product/Item"
import "../css/products.css" 

export const Products = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('products')) || []);

    return (
        <div className="products">
            <h1> latest product</h1>
        <hr />
            <div className="product-item">
                {data.map((item,i) => {
                    return <Item key={i} id={item.key} name={item.name} image={item.img} price={item.price} />
                }) }
            </div>
        </div>
    );
}; 
 
