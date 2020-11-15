import React from 'react'

export const routeConfig = [
    {
        path: '/menu/:id',
        exact: false,
        component: require('../components/layout/layout').default,
        children: [
            {
                path: '/menu/welcome',
                component: () => <div>welcome</div>,
                meta: {
                    name: '欢迎页',
                    icon: '',
                },
            },
            {
                path: '/menu/goods/:id',
                meta: {
                    name: '商品列表',
                    icon: '',
                },
                children: [
                    {
                        path: '/menu/goods/nav1/:id',
                        meta: {
                            name: '商品列表1',
                            icon: '',
                        },
                        children: [
                            {
                                path: '/menu/goods/nav1/nav11',
                                component: () => <div>商品列表11</div>,
                                meta: {
                                    name: '商品列表11',
                                    icon: '',
                                },
                            },
                            {
                                path: '/menu/goods/nav1/nav12',
                                component: () => <div>商品列表12</div>,
                                meta: {
                                    name: '商品列表12',
                                    icon: '',
                                },
                            },
                        ],
                    },
                    {
                        path: '/menu/goods/nav2',
                        component: () => <div>商品列表2</div>,
                        meta: {
                            name: '商品列表2',
                            icon: '',
                        },
                    },
                ],
            },
            {
                path: '/menu/user-manage',
                component: () => <div>用户管理</div>,
                meta: {
                    name: '用户管理',
                    icon: '',
                },
            },
        ],
    },
    {
        path: '/user',
        component: require('../pages/user/User').default,
        meta: {
            name: '登录',
            icon: '',
        },
    },
    {
        path: '*',
        component: () => <div>404</div>,
        meta: {
            name: '404',
            icon: '',
        },
    },
]
