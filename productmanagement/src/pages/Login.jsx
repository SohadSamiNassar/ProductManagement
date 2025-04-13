import {React , useState} from "react"; 
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Card } from 'antd';
import PropTypes from 'prop-types';
import { useAuth } from "../auth/useAuth";
async function loginUser(credentials) {
    return  fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    })
        .then(res => res.json())
        .then(console.log);
}

export const LoginPage = ({ setToken }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const onFinish = (event) => { 
        const token =  loginUser({
            username,
            password
        });
        setToken(token);
        navigate("/settings");
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login'>
            <Card>
                <Form
                    name="basic"

                    style={{
                        //maxWidth: 500,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input onChange={e => setUserName(e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={e => setPassword(e.target.value)} />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            
        </div>
        
    );
};
LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
}


 
