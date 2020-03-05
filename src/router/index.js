
import Login from '../pages/login/login'
import Index from '../App'

export const routeConfig = [
    {
        path: '/',
        component: Index,
    },
    { path: '/login',
        component: Login,
        // indexRoute: { component: Dashboard },
        // childRoutes: [
        //     { path: 'about', component: About },
        //     { path: 'inbox',
        //         component: Inbox,
        //         childRoutes: [
        //             { path: '/messages/:id', component: Message },
        //             { path: 'messages/:id',
        //                 onEnter: function (nextState, replaceState) {
        //                     replaceState(null, '/messages/' + nextState.params.id)
        //                 }
        //             }
        //         ]
        //     }
        // ]
    }
]
