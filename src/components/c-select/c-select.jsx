
import './c-select.less'
import React, { useState, useRef } from 'react'
import HSelect from './h-select'

function CSelect(props) {

    let [style, setStyle] = useState({backgroundColor: 'transparent'})
    let ref = useRef(null)

    const list = [
        {
            label: 'list1',
            value: 1
        },
        {
            label: 'list2',
            value: 2
        },
        {
            label: 'list3',
            value: 3
        },
    ]

    // let style = {
    //     backgroundColor: 'transparent'
    // }

    const handleEnter = (index, e)=> {
        // console.log(ref,e, 'e')
        ref.current.children[index].style.backgroundColor = props.hoverBg
        // setStyle({
        //     backgroundColor: props.hoverBg
        // })
    }
    const handleLeave = (index, e)=> {
        // setStyle({
        //     backgroundColor: 'transparent'
        // })
        ref.current.children[index].style.backgroundColor = 'transparent'
    }

    return (
        <div className="c-select-container">
            <div>select hover</div>
            <ul
                ref={ref}
                className="select">
                {
                    list.map((item, index)=> {
                        return <li
                            onMouseOver={handleEnter.bind(this, index)}
                            onMouseLeave={handleLeave.bind(this, index)}
                            key={item.value}>
                            <span>{item.label}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default HSelect(CSelect)
