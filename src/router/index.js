
import React from 'react'

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
                        component: ()=> <div>商品列表1</div>,
                        meta: {
                            name: '商品列表1',
                            icon: ''
                        },
                        children: [
                            {
                                path: '/nav11',
                                component: ()=> <div>商品列表11</div>,
                                meta: {
                                    name: '商品列表11',
                                    icon: ''
                                },
                            },
                            {
                                path: '/nav12',
                                component: ()=> <div>商品列表12</div>,
                                meta: {
                                    name: '商品列表12',
                                    icon: ''
                                },
                            },
                        ]
                    },
                    {
                        path: '/nav2',
                        component: ()=> <div>商品列表2</div>,
                        meta: {
                            name: '商品列表2',
                            icon: ''
                        },
                    },
                    {
                        path: '/table',
                        component: require('../pages/index/index').default,
                        meta: {
                            name: '表格',
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
