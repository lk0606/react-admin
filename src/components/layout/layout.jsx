
import './layout.less'
import React, {lazy} from 'react'

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

export default class Layout extends React.Component {
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

    render() {
        const _this = this
        function dom(type) {
            return <div>{type}</div>
        }

        function test() {
            return dom(_this.state.dom)
        }

        return (
            <CLayout className="layout-container">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                    </div>
                    {/*<Switch*/}
                        {/*checked={this.state.theme === 'dark'}*/}
                        {/*onChange={this.changeTheme}*/}
                        {/*checkedChildren="Dark"*/}
                        {/*unCheckedChildren="Light"*/}
                    {/*/>*/}
                    <Menu
                        theme={this.state.theme} mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <UserOutlined />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <UploadOutlined />
                            <span>nav 3</span>
                        </Menu.Item>
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
                            test()
                        }
                    </Content>
                </CLayout>
            </CLayout>
        );
    }
}

// ReactDOM.render(<SiderDemo />, mountNode);
