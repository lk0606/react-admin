import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export function Aside(props) {
    // console.log(props, 'Aside props')
    const AsideItem = (children) => {
        // console.log('props :>> ', props)
        return children.map((item) => {
            if (item.children) {
                return (
                    <Menu.SubMenu
                        title={
                            <span>
                                <UserOutlined />
                                <span>{item.meta.name}</span>
                            </span>
                        }
                        key={item.path}
                    >
                        {AsideItem(item.children)}
                    </Menu.SubMenu>
                )
            }
            return (
                <Menu.Item key={item.path}>
                    <Link to={item.path}>
                        <UserOutlined />
                        <span>{item.meta.name}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }

    return (
        <Menu theme={props.theme} mode="inline" defaultSelectedKeys={'0'}>
            {AsideItem(props.children)}
        </Menu>
    )
}
