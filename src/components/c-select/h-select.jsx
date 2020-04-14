
import React, { Component } from 'react'

export default function HSelect(CSelect) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                hoverBg: '#508cee'
            }
        }

        componentDidMount() {
            console.log(this.state.hoverBg)
        }

        render() {
            return <CSelect {...this.props} hoverBg={this.state.hoverBg}/>
        }
    }
}
