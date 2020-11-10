import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom'
import { routeConfig } from './router/index'
import store from './store'
import { message } from 'antd'

import './assets/styles/index.less'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                {routeConfig.map((route, key) => {
                    return (
                        <Route
                            key={key}
                            path={route.path}
                            render={(props) => {
                                // console.log(route, 'props')
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
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
