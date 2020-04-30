

import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import {connect} from 'react-redux'
import {addTodo, apiRequest, login, sagaRequest} from '../../store/actions'
import * as api from '../../api'
import {userInfo} from '../../store/reducers'

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
            props.sagaRequest(values)
            // props.login(values).then(res=> {
            //     console.log(res, 'res')
            //     alert(`欢迎：${res.data.username}`)
            // })
            // if(props.userInfo && props.userInfo.userInfo && props.userInfo.userInfo.username) {
            //     alert(`欢迎：${props.userInfo.userInfo.username}`)
            // }
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
                    password: '123',
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
    sagaRequest: ({username, password})=> dispatch(sagaRequest({username, password})),
    addTodo: ()=> dispatch(addTodo('Learn about actions'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
