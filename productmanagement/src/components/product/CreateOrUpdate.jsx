import React, { useEffect, useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Modal,
    Upload,
} from 'antd'; 
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export const CreateOrUpdate = ({ id, onCloseModal, onChangeTable, onSubmitModal }) => {  
    const [productList, setProductList] = useState(JSON.parse(localStorage.getItem('products')) || []);
    const [newProduct, setNewProduct] = useState(productList.find((item) => item.key == id) || {
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
        console.log(newProduct);
    }

    const handleClose = () => {
        onCloseModal(); 
        setNewProduct({
            key: "",
            name: "",
            description: "",
            shortDescription: "",
            price: 0,
            img: ""
        }); 
    }

    const handelSubmit = () => {
        onSubmitModal(newProduct); 
    }
   

    return (
        <>     <Modal
            open={true}
            onCancel={handleClose}
            footer={null}
            forceRender={true}
        /*title="Modal"*/
        >
            <Form
                onFinish={handelSubmit}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="key" style={{ display: 'none' }}>
                    <Input name="key" value={newProduct.key} />
                </Form.Item >
                <Form.Item label="Name" name="name1" rules={[
                    {
                        required: true,
                        message: 'Please input product name!',
                    },
                ]}>
                    <Input name="name" defaultValue={newProduct.name} onChange={handelInput} />
                </Form.Item>
                <Form.Item label="Description">
                    <TextArea rows={4} name="description" value={newProduct.description} onChange={handelInput} />
                </Form.Item>
                <Form.Item label="Short Description">
                    <TextArea rows={4} name="shortDescription" value={newProduct.shortDescription} onChange={handelInput} />
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
                    <InputNumber name="price" value={newProduct.price} onChange={price => handelInput({ target: { value: price, name: 'price' } })} />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </Modal>
            
        </>
    );
};
