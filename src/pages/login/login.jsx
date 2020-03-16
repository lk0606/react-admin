

import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import {connect} from 'react-redux'
import {addTodo, login} from '../../store/actions'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function Login(props) {
    console.log('login props:', props)
    const onFinish = values => {
        console.log('Success:', values);
        if(values.username && values.password) {
            props.login(values)
            // window.location.href = '/'
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-container">
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    username: 'admin',
                    password: '1234',
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                    <Input />
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
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log(state, 'state login')
    return state
};

const mapDispatchToProps = dispatch => ({
    login: ({username, password})=> dispatch(login({username, password})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
