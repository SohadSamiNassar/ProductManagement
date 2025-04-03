import React, { useEffect, useState } from "react";
import { Space, Table, Button, Modal, Typography, Popconfirm } from 'antd';
import { CreateOrUpdate } from './CreateOrUpdate'

export const ProductTable = () => {
    const [show1, setShow1] = useState(false); 
    const [id, setId] = useState(0); 
    const [data, setData] = useState(localStorage.getItem("products") ?
        JSON.parse(localStorage.getItem("products")) :[]);

    const handleCloseModal = () => {
        setShow1(false);
    }
    const handleIdModal = (key) => {
        setId(key);
    }
    const handleChangeTable = () => { 
        setData(localStorage.getItem("products") ?
            JSON.parse(localStorage.getItem("products")) : []);
    }

    const deleteItem = (key) => {
        setData((lst) => lst.filter((item) => item.key !== key));

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
                    <Button
                        onClick={() => {
                            handleIdModal(record.key);
                            setShow1(true);
                        }}
                    >
                        Edit
                    </Button>
                  
                    <Popconfirm title="Delete?" onConfirm={() => deleteItem(record.key)}>
                        <Button>Delete</Button>
                    </Popconfirm>
                   
                </Space>
            ),
        },
    ];
   
    return (
        <>

            <Typography.Title level={4}> Products</Typography.Title>
            <Button
                onClick={() => {
                    setShow1(true);
                }}
            >
                Add new Product
            </Button>
            <Modal
                open={show1}
                onCancel={handleCloseModal}
                footer={null}
                /*title="Modal"*/
            >
                <CreateOrUpdate onCloseModal={handleCloseModal} onChangeTable={handleChangeTable} id={id} />
            </Modal>
            
            <Table columns={columns} dataSource={data}  /> 
      </>
    );
}; 
 
