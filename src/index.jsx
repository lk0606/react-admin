import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, useHistory } from 'react-router'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { routeConfig } from './router'
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function RouteWithSubRoutes(route) {
    console.log(route, 'route')
    return (
        <Route
            exact
            path={route.path}
            render={props => {
                console.log(props, 'props')
                return <route.component {...props}/>
            }}
        />
    );
}
function RouterDemo() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">index</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
            </ul>
            <Switch>
                { routeConfig.map((route, index)=> {
                    // console.log(route, 'route')
                    // return <RouteWithSubRoutes key={index} {...route}/>
                    return <Route
                        exact
                        key={index}
                        path={route.path}
                        render={props => {
                            console.log(props, 'props')
                            return <route.component {...props}/>
                        }}
                    />
                })}
            </Switch>
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
