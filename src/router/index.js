
import React from 'react'
import { Route, Switch as RouteSwitch, Link, useRouteMatch, useHistory, HashRouter } from "react-router-dom"
import { Layout, Menu, Switch, Avatar, Badge, Dropdown } from 'antd'
// const { Header, Sider, Content } = CLayout

import MainContent from '../components/layout/content'

export const routeConfig = [
    {
        path: '/login',
        component: require('../pages/login/login').default,
        meta: {
            name: '登录',
            icon: ''
        }
    },
    {
        path: '/',
        component: require('../components/layout/layout').default,
        children: [
            {
                path: '/goods',
                component: ()=> <div>goods</div>,
                meta: {
                    name: '商品列表',
                    icon: ''
                },
                children: [
                    {
                        path: '/nav1',
                        component: ()=> <div>nav1</div>,
                        meta: {
                            name: '商品列表1',
                            icon: ''
                        },
                        // children: [
                        //     {
                        //         path: '/nav11',
                        //         component: ()=> <div>nav11</div>,
                        //         meta: {
                        //             name: '商品列表11',
                        //             icon: ''
                        //         },
                        //     },
                        //     {
                        //         path: '/nav12',
                        //         component: ()=> <div>nav12</div>,
                        //         meta: {
                        //             name: '商品列表12',
                        //             icon: ''
                        //         },
                        //     },
                        // ]
                    },
                    // {
                    //     path: '/nav2',
                    //     component: ()=> <div>nav2</div>,
                    //     meta: {
                    //         name: '商品列表2',
                    //         icon: ''
                    //     },
                    // },
                ]
            },
            {
                path: '/user',
                component: ()=> <div>用户管理</div>,
                meta: {
                    name: '用户管理',
                    icon: ''
                },
            },
        ]
    }
]

function SubMenu(props) {
    if(props.children) {
        return <div>
            <p>goods</p>
            {
                props.children.map(item=> {
                    return <Route
                        exact
                        key={item.path}
                        path={item.path}
                        render={(props)=>(
                            <item.component {...props} children={item.children}/>
                        )}
                    />
                })
            }
        </div>
    }
    return <div>
        <p>goods</p>
        {
            <Route
                exact
                key={props.path}
                path={props.path}
                component={props.component}
            />
        }
    </div>
}
