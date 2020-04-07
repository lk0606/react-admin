
import './c-select.less'
import React from 'react'

export default function CSelect() {

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


    return (
        <div className="c-select-container">
            <div>select hover</div>
            <ul className="select">
                {
                    list.map(item=> {
                        return <li key={item.value}>
                            <span>{item.label}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
