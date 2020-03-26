import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import { Router, Route, useHistory } from 'react-router'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { routeConfig } from './router/index'
import { modules } from './router/route.config'
import RouteConfigExample from './router/example'
import './assets/styles/index.css';
import store from './store'


import * as serviceWorker from './serviceWorker';
// console.log(Router, 'Router')

ReactDOM.render(
    <Provider store={store}>
        <Router
            getUserConfirmation={
                (msg, cb)=> {
                    console.log(msg, cb, 'getUserConfirmation')
                }
            }
        >
            <Switch>
                {
                    routeConfig.map((route,key)=>{
                        return <Route
                            key={key}
                            path={route.path}
                            render={props => (
                                <route.component {...props} children={route.children} />
                            )}
                        />
                    })
                }
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
