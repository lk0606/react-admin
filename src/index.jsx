import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, useHistory } from 'react-router'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { routeConfig } from './router'
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props}/>
            )}
        />
    );
}
function RouterDemo() {
    return (
        <Router>
            <Switch>
                { routeConfig.map((item, index)=> {
                    <RouteWithSubRoutes key={index} {...item}/>
                })}
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
