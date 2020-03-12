
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
            <a href="/login">注销</a>
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
        console.log(props, 'props')
    }

    state = {
        collapsed: false,
        theme: 'dark',
        current: '1',
        dom: null
    };

    changeTheme = value => {
        console.log(value, 'changeTheme')
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    handleClick = e => {
        console.log('click ', e);
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
        this.renderDom()
    }
    pushView(route) {
        console.log(route, this, 'pushView')
        this.props.history.push(route.path)
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

                    <Menu
                        theme={this.state.theme} mode="inline" defaultSelectedKeys={'0'}>
                        {
                            this.props.routes.map((item, index)=> {
                                return <Menu.Item
                                    onClick={this.pushView.bind(this, item)}
                                    key={index}>
                                    <UserOutlined />
                                    <span>{item.meta.name}</span>
                                </Menu.Item>
                            })
                            // this.props.routes.map((item, index)=> {
                            //     return <Menu.Item
                            //         key={index}>
                            //         <Link to={item.path}>
                            //             <UserOutlined />
                            //             <span>{item.meta.name}</span>
                            //         </Link>
                            //     </Menu.Item>
                            // })
                        }
                    </Menu>
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
                            this.props.routes.map((item,index)=>{
                                return <Route key={index} exact path={item.path} component={item.component}/>
                            })
                        }
                        {

                            test()
                        }
                    </Content>
                </CLayout>
            </CLayout>
        );
    }
}

// ReactDOM.render(<SiderDemo />, mountNode);
