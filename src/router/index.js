
import React from 'react'

export const routeConfig = [
    {
        path: '/login',
        component: require('../pages/login/login').default
    },
    {
        path: '/',
        component: require('../components/layout/layout').default,
        children: [
            {
                path: '/goods',
                component: ()=> <div>商品管理</div>,
                children: [
                    {
                        path: '/nav1',
                        component: ()=> <div>nav1</div>
                    },
                    {
                        path: '/nav2',
                        component: ()=> <div>nav2</div>
                    },
                ]
            },
            {
                path: '/user',
                component: ()=> <div>用户管理</div>
            },
        ]
    }
]
