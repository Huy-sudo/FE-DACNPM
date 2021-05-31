import React, { Component } from 'react';
import Header1 from './header'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Affix, Button,Menu, Layout } from 'antd';
import Profile from './profile'
const { Header, Content, Footer, Sider } = Layout;

class index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Layout>
                <Affix offsetTop={0} >
                        <Header className="header" style={{ backgroundColor: '#18cc30' }}>
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <Menu style={{ backgroundColor: '#0ca625', height: '65px' }} mode="horizontal" defaultSelectedKeys={['2']} >
                                    <Menu.Item key="mail" className="text-white " icon={<MailOutlined />}>
                                        Phong Mach
                                </Menu.Item>
                                    <Menu.Item key="12312" className="text-white " icon={<MailOutlined />}>
                                        Navigatioewewn One
                                </Menu.Item >

                                </Menu>
                                <div>

                                    <Profile></Profile>
                                </div>
                            </div>     
                    </Header>
                    </Affix>
                <Content style={{
                width: '100%',
                minHeight:'100vh'
            }}>
                    {this.props.children}
                </Content>
                
                <Footer style={{ textAlign: 'center' }}>
                Do An NMCNPM Beta
                </Footer>
                </Layout>
            </div>
        );
    }
}

export default index;
