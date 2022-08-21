import React from 'react'

import './index.less'

export default function Qiankun() {
    const push = (subapp) => {
        window.history.pushState(null, subapp, subapp)
    }
    return (
        <div className="mainapp">
            {/* 标题栏 */}
            <header className="mainapp-header">
                <h1>QianKun</h1>
            </header>
            <div className="mainapp-main">
                {/* 侧边栏 */}
                <ul className="mainapp-sidemenu">
                    {/* <li onclick="push('/react16')">React16</li>
          <li onclick="push('/react15')">React15</li> */}
                    <li
                        onClick={() => {
                            push('/vue')
                        }}
                    >
                        Vue
                    </li>
                    <li
                        onClick={() => {
                            push('/vue3')
                        }}
                    >
                        Vue3
                    </li>
                    {/* <li onclick="push('/angular9')">Angular9</li>
          <li onclick="push('/purehtml')">Purehtml</li> */}
                </ul>
                {/* 子应用 */}
                <main id="subapp-container"></main>
            </div>
        </div>
    )
}
