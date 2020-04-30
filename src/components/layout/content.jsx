
import React from 'react'
import { Route } from "react-router-dom"


export default function MainContent(props) {
    console.log(props, 'Content props')

    return (
        <div>

            <Route
                key={props.path}
                path={props.path}
            >
                path: { props.path }
                <props.component/>
            </Route>

        </div>
    );
}

export function SubRouter(props) {
    if(props.children) {
        return props.children.map(item=> {
            return <Route
                key={item.path}
                path={item.path}
            >
                path: { item.path }
                <item.component/>

            </Route>
        })
    }
    return <Route
        key={props.path}
        path={props.path}
    >
        path: { props.path }
        <props.component/>

    </Route>
}
