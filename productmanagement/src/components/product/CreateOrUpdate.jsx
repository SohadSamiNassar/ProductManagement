import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Upload,
} from 'antd'; 
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export const CreateOrUpdate = ({ id, onCloseModal, onChangeTable }) => { 
    const [productList, setProductList] = useState(localStorage.getItem("products") ?
        JSON.parse(localStorage.getItem("products")) : []);

    const [newProduct, setNewProduct] = useState(id > 0 ? productList.find((item) => item.key == id) :
        {
            key: "",
            name: "",
            description: "",
            shortDescription: "",
            price: 0,
            img: ""
        });

    const handelInput = (event) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
    }

    const handleClose = () => {
        onCloseModal();
        setNewProduct({
            key: 0,
            name: "",
            description: "",
            shortDescription: "",
            price: 0,
            img: ""
        });
    }

    const handelSubmit = (event) => {
        if (id > 0) {
           // for edit form
            editItem(id);
        } else {
            // for create form
            createItem();
        }
        handleClose();
    }
    //const getItem = (id) => {
    //    if (id > 0) {
    //        setNewProduct(productList.find((item) => item.key == id));
    //    }
    //    else {
    //        setNewProduct({
    //            key: "",
    //            name: "",
    //            description: "",
    //            shortDescription: "",
    //            price: 0,
    //            img:""
    //        });
    //    }
    //}
    const editItem = (key) => {
        setProductList((lst) => lst.filter((item) => item.key !== key));
        setProductList((prev) => [...prev, newProduct]);
        console.log(newProduct);
    }
    const createItem = () => { 
        alert(productList.length);

        newProduct.key = productList.length + 1;
        setProductList((prev) => [...prev, newProduct]);
        console.log(newProduct);

    }

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(productList));
        onChangeTable();
     /*getItem(id);*/
    }, [productList]);
    useEffect(() => {
    }, [newProduct]);
    
    console.log(newProduct);
    return (
        <>
            <Form 
                onFinish={handelSubmit}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{ maxWidth: 600}}
            >
                <Form.Item label="key" style={{ display: 'none' }} >
                    <Input name="key" defaultValue={newProduct.key}/>
                </Form.Item >
                <Form.Item label="Name" name="name" rules={[
                    {
                        required: true,
                        message: 'Please input product name!',
                    },
                ]}>
                    <Input name="name" defaultValue={newProduct.name} onChange={handelInput} />
                </Form.Item>
                <Form.Item label="Description">
                    <TextArea rows={4} name="description" defaultValue={newProduct.description} onChange={handelInput} />
                </Form.Item>
                <Form.Item label="Short Description">
                    <TextArea rows={4} name="shortDescription" defaultValue={newProduct.shortDescription} onChange={handelInput} />
                </Form.Item>
             
                <Form.Item label="Photo" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <button
                            style={{
                                color: 'inherit',
                                cursor: 'inherit',
                                border: 0,
                                background: 'none',
                            }}
                            type="button"
                        >
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </button>
                    </Upload>
                </Form.Item>

                <Form.Item label="Price">
                    <InputNumber name="price" defaultValue={newProduct.price} onChange={price => handelInput({ target: { value: price, name: 'price' } })} />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                 
            </Form>
        </>
    );
};
