
import React from 'react'
import Layout from '../components/layout/layout'

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
        // component: Layout,
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
                    },
                    {
                        path: '/nav2',
                        component: ()=> <div>nav2</div>,
                        meta: {
                            name: '商品列表2',
                            icon: ''
                        },
                    },
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
