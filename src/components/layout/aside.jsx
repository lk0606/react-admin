
import React, {lazy} from 'react'
import { Route, Switch as RouteSwitch, Link, useRouteMatch, useHistory, HashRouter } from "react-router-dom"
import { Layout as CLayout, Menu, Switch, Avatar, Badge, Dropdown } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons'
const { SubMenu} = Menu



export function Aside(props) {
    // console.log(props, 'Aside props')


    const AsideItem = (children)=> {
        const history = useHistory()
        const handleRoute = (route)=> {
            console.log('path', route.path)
            return history.push(route.path)
        }
        return children.map(item=> {
            if(item.children) {
                return <Menu.SubMenu
                    title={
                        <span>
                            <UserOutlined />
                            <span>{item.meta.name}</span>
                        </span>
                    }
                    key={item.path}>
                    { AsideItem(item.children) }
                </Menu.SubMenu>
            }
            return <Menu.Item
                onClick={handleRoute.bind(this, item)}
                key={item.path}>
                <UserOutlined />
                <span>{item.meta.name}</span>
            </Menu.Item>
        })
    }

    return <Menu
        theme={props.theme} mode="inline" defaultSelectedKeys={'0'}>
        {
            AsideItem(props.children)
        }
    </Menu>
}
