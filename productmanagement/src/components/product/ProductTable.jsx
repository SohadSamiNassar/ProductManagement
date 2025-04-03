import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Space, Table, Button, Typography, Popconfirm, notification } from 'antd';
import { CreateOrUpdate } from './CreateOrUpdate'
const key = 'updatable';

export const ProductTable = () => {
    const [show1, setShow1] = useState(false); 
    const [msg, setMsg] = useState(""); 
    const [id, setId] = useState(null); 
    const [data, setData] = useState(JSON.parse(localStorage.getItem('products')) || []);

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (m) => {
    
        setTimeout(() => {
            api.success({
                key,
                message: 'Success',
                description: m,
            });
        }, 1000);
    };

    const handleCloseModal = () => {
        setShow1(false); 
    }
    const handleIdModal = (key) => {
        setId(key);
    }
    const handleChangeTable = () => { 
        setData(JSON.parse(localStorage.getItem('products')) || []);
    }

    const deleteItem = (key) => {
        setData((lst) => lst.filter((item) => item.key !== key));
        openNotification("Deleted product succssfully.");
    }
    const editItem = (newProduct) => {
        setData((lst) => lst.map((currentRow, idx) => {
            if (currentRow.key !== newProduct.key) return currentRow;
            return newProduct;
        })); 
        openNotification("Edited product successfully.");

    }
    const createItem = (newProduct) => {
        newProduct.key = uuidv4();
        setData((prev) => [...prev, newProduct]);
        openNotification("Added product successfully.");
    }
    const onSubmit = (newProduct) => {
        if (id) {
            // for edit form
            editItem(newProduct);
        } else {
            // for create form
            createItem(newProduct);
        }
        handleCloseModal();
    }

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(data));
    }, [data])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Short Description',
            dataIndex: 'shortDescription',
            key: 'shortDescription',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button color="primary" variant="outlined"
                        onClick={() => {
                            handleIdModal(record.key);
                            setShow1(true);
                        }}
                    >
                        Edit
                    </Button>
                  
                    <Popconfirm title="Delete?" onConfirm={() => deleteItem(record.key)}>
                        <Button color="danger" variant="outlined">Delete</Button>
                    </Popconfirm>
                   
                </Space>
            ),
        },
    ];
   
    return (
        <>
            {contextHolder}
            <Typography.Title level={4}> Products</Typography.Title>
            <Button color="primary" variant="outlined" 
                onClick={() => {
                    handleIdModal(null);
                    setShow1(true);
                }}
            >
                Add new Product
            </Button>
          
            <Table columns={columns} dataSource={data} />
            {show1 && < CreateOrUpdate onCloseModal={handleCloseModal} onChangeTable={handleChangeTable} id={id} onSubmitModal={onSubmit} />}

      </>
    );
}; 
 
