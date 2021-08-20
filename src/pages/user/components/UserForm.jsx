import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox, message as Message } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { getCaptcha, getCaptchaByEmail } from '../../../api/common'

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
}

const UserForm = ({ userInfo = {}, onFinish, onFinishFailed, activeKey }) => {
    const [captchaInfo, setCaptchaInfo] = useState({
        text: '',
        data: '',
    })
    const [form] = Form.useForm()
    const rules = (message, type = 'string', required = true) => {
        if (type === 'captcha') {
            const validator = async (rule, value) => {
                // console.log('value,  :>> ', value, captchaInfo.text)
                if (!new RegExp(`${captchaInfo.text}`, 'i').test(value)) {
                    return Promise.reject(rule.message)
                } else {
                    return true
                }
            }
            return [
                {
                    required,
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
        } catch (error) {}
    }

    const onCaptchaByEmail = async () => {
        try {
            const data = await form.validateFields([
                'username',
                'password',
                'email',
            ])
            const { message } = await getCaptchaByEmail(data)
            Message.success(message)
        } catch (error) {}
    }

    useEffect(() => {
        if (activeKey === 'login') {
            onCaptcha()
        }
    }, [activeKey])

    return (
        <Form
            labelAlign="left"
            {...layout}
            form={form}
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
                <Input
                    placeholder="Please input your username"
                    prefix={<UserOutlined className="form-item-icon" />}
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={rules('Please input your password!')}
            >
                <Input.Password
                    placeholder="Please input your password"
                    prefix={<LockOutlined className="form-item-icon" />}
                />
            </Form.Item>

            {activeKey === 'register' && (
                <Form.Item
                    label="Email"
                    name="email"
                    rules={rules('Please input correct email!', 'email')}
                >
                    <Input
                        placeholder="input your email, to get captcha"
                        prefix={<MailOutlined className="form-item-icon" />}
                    />
                </Form.Item>
            )}

            <Form.Item
                label="Captcha"
                name="captcha"
                rules={rules('Please input correct captcha!', 'captcha')}
                extra="We must make sure that your are a human."
            >
                <div className="df">
                    <Input placeholder="input four code" />
                    {activeKey === 'register' && (
                        <Button
                            type="primary"
                            className="ml10"
                            onClick={onCaptchaByEmail}
                        >
                            获取验证码
                        </Button>
                    )}
                    {activeKey === 'login' && (
                        <div
                            className="ml10 captcha-wrap"
                            dangerouslySetInnerHTML={{
                                __html: captchaInfo.data || '验证码加载失败',
                            }}
                            onClick={onCaptcha}
                        ></div>
                    )}
                </div>
            </Form.Item>

            {activeKey === 'login' && (
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
            )}

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {activeKey}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default UserForm
