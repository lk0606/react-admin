
import './c-input.less'
import React, { useRef } from 'react'

export default function CInput(props) {
    const inputEl = useRef(null);
    console.log(props, inputEl, 'CInput props')
    let validAttrs = {}
    Object.keys(props).forEach(attr=> {
        if(inputEl && inputEl.current && attr in inputEl.current) {
            validAttrs[attr] = props[attr]
        }
    })
    console.log(validAttrs, 'attrs')
    function handleInput(e) {
        // console.log(e.target.value, 'handleInput')
        props.myInput(e.target.value)
    }

    return (
        <div className="c-input-container">
            <input
                value={props.input}
                onChange={handleInput.bind(this)}
                ref={inputEl}
                {...validAttrs}
                type="text"/>
            <span>111</span>
        </div>
    )
}
