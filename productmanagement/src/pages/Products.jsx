//import React, { useState } from "react";
//import { Item } from "../components/HomePage/Item"
//import "../css/products.css"

//export const Products = () => {
//    const [data, setData] = useState(JSON.parse(localStorage.getItem('products')) || []);

//    return (
//        <div className="products">
//            <h1> latest product</h1>
//        <hr />
//            <div className="product-item">
//                {data.map((item,i) => {
//                    return <Item key={i} id={item.key} name={item.name} image={item.img} description={item.description} price={item.price} />
//                }) }
//            </div>
//        </div>
//    );
//};

//import { React } from "react";
//import {  Image } from 'antd';
//import { ArrowRightOutlined } from "@ant-design/icons";
//import "../../css/offer.css"

import React, { useRef } from 'react';
import { Carousel, Card, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

//const contentStyle = {
//    height: '160px',
//    color: '#fff',
//    lineHeight: '160px',
//    textAlign: 'center',
//    background: '#364d79',
//};
const { Meta } = Card;
const products = [
    { name: 'Product 1', price: '$19.99', image: 'https://i.ibb.co/gLH71Zjc/img.jpg' },
    { name: 'Product 2', price: '$29.99', image: 'https://i.ibb.co/gLH71Zjc/img.jpg' },
    { name: 'Product 3', price: '$39.99', image: 'https://i.ibb.co/gLH71Zjc/img.jpg' },
    { name: 'Product 4', price: '$49.99', image: 'https://i.ibb.co/gLH71Zjc/img.jpg' },
    { name: 'Product 5', price: '$59.99', image: 'https://i.ibb.co/gLH71Zjc/img.jpg' },
    { name: 'Product 6', price: '$69.99', image: 'https://i.ibb.co/gLH71Zjc/img.jpg' },
    { name: 'Product 7', price: '$69.99', image: 'https://i.ibb.co/gLH71Zjc/img.jpg' },
    { name: 'Product 8', price: '$69.99', image: 'https://i.ibb.co/gLH71Zjc/img.jpg' },
];

// Utility to group products into chunks of 3
const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

const groupedProducts = chunkArray(products, 4);
export const Products = () => {
    const carouselRef = useRef();
    return (
        <div style={{ position: 'relative', width: '80%', margin: '0 auto' }}>
            <Carousel ref={carouselRef} autoplay>
            {groupedProducts.map((group, slideIndex) => (
                <div key={slideIndex}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 20, padding: 20 }}>
                        {group.map((product, index) => (
                            <Card className="item"
                                key={index}
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt={product.name} src={product.image} />}
                            >
                                <Meta title={product.name} description={product.price} />
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </Carousel>
           {/* Custom Arrows */ }
      <Button
        
        shape="circle"
        icon={<LeftOutlined />}
        onClick={() => carouselRef.current.prev()}
        style={{
          position: 'absolute',
          top: '50%',
          left: '-40px',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      />
      <Button
        shape="circle"
        icon={<RightOutlined />}
        onClick={() => carouselRef.current.next()}
        style={{
          position: 'absolute',
          top: '50%',
          right: '-40px',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      />
      </div>
    );
};

 
