import {React , useState} from "react"; 
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { useAuth } from "../auth/useAuth";


export const LoginPage = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState(); 
    const { login } = useAuth();

    const onFinish = (event) => {
        const data = new FormData(event.currentTarget);
        login({
            username,
            password
        });
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
//LoginPage.propTypes = {
//    setToken: PropTypes.func.isRequired
//}


 
