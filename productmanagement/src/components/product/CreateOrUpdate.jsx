import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import {  UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Modal,
    Upload,
    Image
} from 'antd'; 
const { TextArea } = Input;
const key = 'updatable';

export const CreateOrUpdate = ({ id, onCloseModal, onChangeTable, onSubmitModal }) => { 
    const [loading, setLoading] = useState(false);
    const apiKey = '2ce826a1f14d466f552d8e8c5a0ea837'; // Replace this with your ImageBB API key
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
    } 
 
    const uploadToImageBB = async ({ file, onSuccess, onError }) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            setLoading(true);
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            if (data.success) {
                setNewProduct({ ...newProduct, ["img"]: data.data.url });
                Swal.fire({
                    title: 'success',
                    text: 'Image uploaded successfully!',
                    icon: 'success',
                    timer: 2000, // milliseconds (2 seconds)
                    showConfirmButton: false, // hides the OK button
                });
                onSuccess("ok"); // Notify Ant Design Upload it succeeded
            } else {
                throw new Error('Upload failed');
            }
        } catch (err) {
            console.error(err); 
            Swal.fire({
                title: 'Oops!',
                text: 'Upload failed.',
                icon: 'error',
                timer: 2000, // milliseconds (2 seconds)
                showConfirmButton: false, // hides the OK button
            });
            onError(err);
        } finally {
            setLoading(false);
        }
    };
     
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

                <Form.Item label="Photo">
               
                    <Upload
                        customRequest={uploadToImageBB}
                        showUploadList={false} // Hide default file list
                        accept="image/*"
                    >
                        <Button icon={<UploadOutlined />} loading={loading}>
                            Click to Upload
                        </Button>
                    </Upload>
                    {newProduct.img && (
                        <div style={{ marginTop: 20 }}>
                            <h3>Uploaded Image:</h3>
                            <Image
                                src={newProduct.img}
                                alt="Uploaded"
                                width={100}
                                style={{ borderRadius: '8px' }}
                            />
                        </div>
                    )}
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
