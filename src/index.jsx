import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, useHistory } from 'react-router'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { routeConfig } from './router/index'
import { modules } from './router/route.config'
import RouteConfigExample from './router/example'
import './assets/styles/index.css';
import App from './test/App';
import * as serviceWorker from './serviceWorker';
// console.log(Switch, 'Switch')

function RouteWithSubRoutes(route) {
    return (
        <Route
            exact
            path={route.path}
            component={route.component}
        />
    );
}
function RouterDemo() {
    const split = <Switch>
        {
            routeConfig.map((route, index)=> {
                return <RouteWithSubRoutes key={index} {...route}/>
                return <Route
                    exact
                    key={index}
                    path={route.path}
                    component={route.component}
                />})
        }
    </Switch>
    const normal = <Switch>
        {
            routeConfig.map((route, index)=> {
                return <Route
                    exact
                    key={index}
                    path={route.path}
                    component={route.component}
                    routes={route.children}
                />})
        }
    </Switch>

    // console.log(split, normal, 'split, normal')

    return (
        <Router>
            {normal}
        </Router>
    )
}

ReactDOM.render(
    <RouterDemo/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
