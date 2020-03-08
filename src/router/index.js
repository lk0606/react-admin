
export const routeConfig = [
    {
        path: '/',
        component: require('../pages/index/index').default,
    },
    {
        path: '/login',
        component: require('../pages/login/login').default,
        children: [

        ]
    }
]
