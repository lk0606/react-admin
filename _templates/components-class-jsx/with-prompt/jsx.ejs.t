---
    to: src/components/<%= name %>/<%= name %>.jsx
---

import './<%= Name %>.less'
import React from 'react'
import PropTypes from 'prop-types'

export default class <%= Name %> extends React.Component {
    static propTypes = {
        testText: PropTypes.string
    }

    static defaultProps = {
        testText: 'this is a test text'
    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="<%= name %>-container">
                <%= name %>-hygen
            </div>
        )
    }
}
