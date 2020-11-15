import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    HashRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import { routeConfig } from './router/index'
import store from './store'
import { message } from 'antd'
import Cookies from 'js-cookie'

import './assets/styles/index.less'
import * as serviceWorker from './serviceWorker'

const token = Cookies.get('token')
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                {routeConfig.map((route) => {
                    return (
                        <Route
                            exact={route.exact}
                            key={route.path}
                            path={route.path}
                            render={(props) => {
                                return (
                                    <route.component
                                        {...props}
                                        message={message}
                                        children={route.children}
                                    />
                                )
                            }}
                        />
                    )
                })}
            </Switch>
            {!token && <Redirect to="/user" />}
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
