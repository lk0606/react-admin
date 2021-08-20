import './layout.less'
import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout as CLayout, Menu, Switch, Avatar, Badge, Dropdown } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons'
import Aside from './aside'

const { Header, Sider, Content } = CLayout

const menu = (
    <Menu>
        <Menu.Item>
            <span>略略略</span>
        </Menu.Item>
        <Menu.Item>
            <span>敬请期待</span>
        </Menu.Item>
        <Menu.Item>
            <Link to="/user">注销</Link>
        </Menu.Item>
    </Menu>
)

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            theme: 'dark',
            current: '1',
            dom: null,
            input: '',
        }
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        })
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    componentDidMount() {}

    render() {
        return (
            <CLayout className="layout-container">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"></div>
                    <Switch
                        checked={this.state.theme === 'dark'}
                        onChange={this.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                    <Aside
                        theme={this.state.theme}
                        children={this.props.children}
                        {...this.props}
                    />
                </Sider>
                <CLayout className="site-layout">
                    <Header className="header-wrap" style={{ padding: 0 }}>
                        {React.createElement(
                            this.state.collapsed
                                ? MenuUnfoldOutlined
                                : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: this.toggle,
                            }
                        )}
                        <div className="header-right">
                            <span className="avatar-item">
                                <Dropdown overlay={menu}>
                                    <Badge count={1}>
                                        <Avatar
                                            shape="square"
                                            icon={<UserOutlined />}
                                        />
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
                        <main id="subapp-container" />
                        <MountRouteComp children={this.props.children} />
                    </Content>
                </CLayout>
            </CLayout>
        )
    }
}

function MountRouteComp(props) {
    if (props.hasOwnProperty('children')) {
        // console.log('if :>> ', props);
        return props.children.map((item) => {
            return (
                <Route exact={item.exact} key={item.path} path={item.path}>
                    {MountRouteComp(item)}
                </Route>
                // MountRouteComp(item)
            )
        })
    } else {
        // console.log('else :>> ', props);
        return (
            <Route
                exact={props.exact}
                key={props.path}
                path={props.path}
                render={(childProp) => {
                    return props.component && <props.component {...childProp} />
                }}
            />
        )
    }
}
