---
    to: src/components/<%= name %>/<%= name %>.jsx
---

import '<%= name %>.less'
import React from 'react'

export default function <%= Name %>() {

    return (
        <div className="<%= name %>-container">
            <%= name %>-hygen
        </div>
    )
}
