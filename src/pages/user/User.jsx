import React, { useState } from 'react'
import { Tabs } from 'antd'
import UserForm from './components/UserForm'
import { connect } from 'react-redux'
import crypto from 'crypto-js/sha1'
import {
    addTodo,
    apiRequest,
    loginAction,
    sagaRequest,
} from '../../store/actions'
import { getUserInfo, reg } from '../../api/user'
import './index.less'

const form = {
    login: {
        label: '登录',
        username: 'admin',
        password: '5456',
        remember: true,
    },
    register: {
        username: '',
        password: '',
        email: '',
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

    const handleLogin = async (values = {}) => {
        try {
            const { password = '' } = values
            const hash = crypto(password).toString()
            values.password = hash
            const { message } = await getUserInfo(values)
            props.message.success(message)
        } catch (error) {
            console.log('error :>> ', error)
        }
    }

    const handleReg = async (values) => {
        try {
            const { password = '' } = values
            const hash = crypto(password).toString()
            values.password = hash
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
                        activeKey="login"
                        onFinish={handleLogin}
                        onFinishFailed={onFinishFailed}
                        userInfo={form.login}
                    />
                </Tabs.TabPane>
                <Tabs.TabPane tab="注册" key="register">
                    <UserForm
                        activeKey="register"
                        onFinish={handleReg}
                        userInfo={form.register}
                        onFinishFailed={onFinishFailed}
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
