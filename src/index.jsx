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

function descRouter(routes) {
    return routes.map(route => {
        if (route.children) {
            return (
                <Route key={route.path} component={route.component} path={route.path}>
                    {descRouter(route.children)}
                </Route>
            );
        } else {
            return (<Route key={route.path} component={route.component} path={route.path}/>);
        }
    })
}
console.log(descRouter(routeConfig))

function RouteItem(routeConfig) {
    console.log(routeConfig, ' routeConfig')
    return routeConfig.map((route, key)=>{
        console.log(route, 'route')
        if(route.children) {
            return <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                // component={route.component}
                render={props => {
                    return <route.component {...props} children={route.children} />
                }}

            >
                {/*{RouteItem(route.children)}*/}
            </Route>
        }
        return <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            // component={route.component}
            render={props => {
                return <route.component {...props} children={route.children} />
            }}

        />

    })
}

export function SubRoute(routes) {
    console.log(routes, 'SubRoute')
    return routes.map(item=> {
        if(item.children) {
            SubRoute(item.children)
        }
        return <Route
            exact
            key={item.path}
            path="/:id"
        >
            <item.component children={item.children}/>
        </Route>
    })
}

ReactDOM.render(
    <Provider store={store}>
        <Router
        >
            {
                // SubRoute(routeConfig)
                routeConfig.map((route,key)=>{

                    if(route.exact){

                        return <Route
                            key={key}
                            exact
                            path={route.path}
                            render={props => (
                                <route.component {...props} children={route.children} />
                            )}

                        />
                    }else{
                        return <Route
                            key={key}
                            path={route.path}
                            render={props => (
                                <route.component {...props} children={route.children} />
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
