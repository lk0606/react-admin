
import './layout.less'
import React, {lazy} from 'react'
import { Route, Switch as RouteSwitch, Link, useRouteMatch, useHistory, HashRouter } from "react-router-dom"
import { Layout as CLayout, Menu, Switch, Avatar, Badge, Dropdown } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons'
import { Aside } from './aside'
import MainContent from './content'
import CInput from '../c-input/c-input'

const { Header, Sider, Content } = CLayout

const menu = (
    <Menu>
        <Menu.Item>
            <span>略略略</span>
        </Menu.Item>
        <Menu.Item>
            <span>噗呲</span>
        </Menu.Item>
        <Menu.Item>
            <Link to="/login">注销</Link>
            {/*<span></span>*/}
        </Menu.Item>
    </Menu>
);
function ChildCom(props) {
    return <p>{props.child}</p>
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props, 'props Layout')
    }

    state = {
        collapsed: false,
        theme: 'dark',
        current: '1',
        dom: null,
        input: '',
    };

    changeTheme = value => {
        // console.log(value, 'changeTheme')
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    handleClick = e => {
        // console.log('click ', e);
        this.setState({
            current: e.key,
        })
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    api() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(true)
            },500)
        })
    }
    async renderDom() {
        try {
            let dom = await this.api()
            if(dom) {
                this.setState({
                    dom: 3
                })
            }
        } catch (e) {
            console.log(e, 'e')
        }
    }
    componentDidMount() {
        console.log(this, 'this')
        this.renderDom().then(res=> {
            console.log(res, 'res')
        })
    }
    pushView(path) {
        console.log(path, this, 'pushView')
        this.props.history.push(path)
    }
    handleInput = (data)=> {
        console.log(data, 'handleInput parent')
        this.setState({
            input: data
        })
    }

    render() {
        const _this = this
        function dom(type) {
            return <div>
                <p>state: {type}</p>
                <ChildCom child={"child:" + type}/>
            </div>
        }

        function test() {
            return dom(_this.state.dom)
        }

        return (
            <CLayout className="layout-container">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                    </div>
                    <Switch
                        checked={this.state.theme === 'dark'}
                        onChange={this.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                    <Aside
                        onHandleRoute={this.pushView.bind(this)}
                        theme={this.state.theme}
                        children={this.props.children}/>
                </Sider>
                <CLayout className="site-layout">
                    <Header className="header-wrap" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,{
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <div className="header-right">
                            <span className="avatar-item">
                                <Dropdown overlay={menu}>
                                    <Badge count={1}>
                                        <Avatar shape="square" icon={<UserOutlined />} />
                                    </Badge>
                                </Dropdown>
                            </span>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {
                            this.props.children.map(item=>{
                                // console.log(item, 'layout item')
                                return AllRoute(item)
                            })
                        }

                        {

                            test()
                        }
                        <CInput
                            myInput={this.handleInput}
                            input={this.state.input}
                            test="11"
                            maxLength={10}
                        />
                    </Content>
                </CLayout>
            </CLayout>
        );
    }
}

function AllRoute(props) {
    // console.log(props, 'AllRoute')
    if(!props) {
        return
    }
    if(props.hasOwnProperty('children')) {
        return props.children.map(item=> {
            return AllRoute(item)
        })
    } else {
        return <Route
            key={props.path}
            exact={props.exact}
            path={props.path}
            render={childProp => {
                return <props.component {...childProp} />
            }}
        />
    }
}
