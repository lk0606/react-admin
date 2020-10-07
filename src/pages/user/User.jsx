import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import UserForm from './components/UserForm'
import { connect } from 'react-redux'
import {
    addTodo,
    apiRequest,
    loginAction,
    sagaRequest,
} from '../../store/actions'
import { getUserInfo, reg } from '../../api/user'
import './index.less'

const form = {
    login:
        // [
        //     {
        //         label: '昵称',
        //         name: 'username',
        //         value: 'admin',
        //         rules: [],
        //     },
        // ],
        {
            label: '登录',
            username: 'admin',
            password: '123',
            remember: true,
        },
    register: {
        username: '',
        password: '',
        captcha: '',
    },
}

function User(props) {
    const [activeKey, setActiveKey] = useState('login')

    const handleChange = (type) => {
        setActiveKey(type)
    }

    // const onFinish = values => {
    // console.log('Success:', values, loginData)
    // props.sagaRequest(values)
    // };

    const handleLogin = async (values) => {
        try {
            const { message } = await getUserInfo(values)
            props.message.success(message)
        } catch (error) {}
    }

    const handleReg = async (values) => {
        try {
            const { message } = await reg(values)
            props.message.success(message)
        } catch (error) {}
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className="login-container">
            <Tabs
                className="tabs-reset"
                defaultActiveKey="login"
                activeKey={activeKey}
                type="card"
                onChange={handleChange}
            >
                <Tabs.TabPane tab="登录" key="login">
                    <UserForm
                        activeKey={activeKey}
                        onFinish={handleLogin}
                        onFinishFailed={onFinishFailed}
                        userInfo={form.login}
                    />
                </Tabs.TabPane>
                <Tabs.TabPane tab="注册" key="register">
                    <UserForm
                        activeKey={activeKey}
                        onFinish={handleReg}
                        onFinishFailed={onFinishFailed}
                        userInfo={form.register}
                    />
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state, 'state login')
    return state
}

const mapDispatchToProps = (dispatch) => ({
    login: ({ username, password }) =>
        dispatch(loginAction({ username, password })),
    sagaRequest: ({ username, password }) =>
        dispatch(sagaRequest({ username, password })),
    addTodo: () => dispatch(addTodo('Learn about actions')),
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
