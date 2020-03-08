import React from 'react';
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
// console.log(Switch, 'Switch')

function SubRoute(routes) {

    return routes.map(item=> {
        // if(item.children && Array.isArray(item.children)) {
        //     return <Route
        //         key={item.path}
        //         exact={item.path === '/'}
        //         path={item.path}
        //         component={item.component}
        //     >{
        //         SubRoute(item.children)
        //     }</Route>
        // }
        return <Route
            key={item.path}
            exact={item.path === '/'}
            path={item.path}
            component={item.component}
        />
    })
}

function RouterIndex() {
    return <Router>
        { SubRoute(routeConfig) }
    </Router>
}

ReactDOM.render(
    <Provider store={store}>
        <Router
        >
            {
                routeConfig.map((route,key)=>{

                    if(route.exact){

                        return <Route
                            key={key}
                            exact
                            path={route.path}
                            render={props => (
                                <route.component {...props} routes={route.children} />
                            )}

                        />
                    }else{
                        return <Route
                            key={key}
                            path={route.path}
                            render={props => (
                                <route.component {...props} routes={route.children} />
                            )}
                        />

                    }
                })
            }
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
