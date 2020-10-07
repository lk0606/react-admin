import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { getCaptcha } from '../../../api/common'

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 18,
    },
}

const UserForm = ({ userInfo, onFinish, onFinishFailed, activeKey }) => {
    const [captchaInfo, setCaptchaInfo] = useState({
        text: '',
        data: '',
    })
    const rules = (message, type = 'string', required = true) => {
        if (type === 'captcha') {
            const validator = async (rule, value) => {
                console.log('value,  :>> ', value, captchaInfo.text)
                if (!new RegExp(`${captchaInfo.text}`, 'i').test(value)) {
                    return Promise.reject(rule.message)
                } else {
                    return true
                }
            }
            return [
                {
                    validator,
                    message,
                },
            ]
        }
        const result = [
            {
                required,
                type,
                message,
            },
        ]
        return result
    }

    const onCaptcha = async () => {
        try {
            const { data = {} } = (await getCaptcha()) || {}
            setCaptchaInfo(data)
            // return result
        } catch (error) {}
    }

    useEffect(() => {
        if (activeKey === 'register') {
            onCaptcha()
        }
    }, [activeKey])

    return (
        <Form
            labelAlign="left"
            {...layout}
            name={activeKey}
            initialValues={userInfo}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={rules('Please input your username!')}
            >
                <Input prefix={<UserOutlined className="form-item-icon" />} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={rules('Please input your password!')}
            >
                <Input.Password
                    prefix={<LockOutlined className="form-item-icon" />}
                />
            </Form.Item>

            {activeKey === 'login' ? (
                <Form.Item
                    // {...tailLayout}
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
            ) : null}

            {activeKey === 'register' ? (
                <>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={rules('Please input correct email!', 'email')}
                    >
                        <Input
                            prefix={<MailOutlined className="form-item-icon" />}
                        />
                    </Form.Item>
                    {captchaInfo.data ? (
                        <Form.Item
                            // {...tailLayout}
                            label="Captcha"
                            name="captcha"
                            rules={rules(
                                'Please input correct captcha!',
                                'captcha'
                            )}
                            extra="We must make sure that your are a human."
                        >
                            <div className="df">
                                <Input />
                                <div
                                    className="captcha-wrap"
                                    dangerouslySetInnerHTML={{
                                        __html: captchaInfo.data,
                                    }}
                                    onClick={onCaptcha}
                                ></div>
                            </div>
                        </Form.Item>
                    ) : null}
                </>
            ) : null}

            <Form.Item
            // {...tailLayout}
            >
                <Button type="primary" htmlType="submit">
                    {activeKey}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default UserForm
