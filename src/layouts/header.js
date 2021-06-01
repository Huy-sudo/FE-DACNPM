import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import Profile from './profile'
import Layout from 'antd/lib/layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
const { SubMenu } = Menu;
const {Header} = Layout;
class header extends Component {

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {

        return (
            
            <Header className="header" style={{ backgroundColor: '#18cc30' }}>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <Menu style={{ backgroundColor: '#0ca625', height: '65px' }} mode="horizontal" defaultSelectedKeys={['2']} >
                        <Menu.Item key="mail" className="text-white " icon={<FontAwesomeIcon icon={faLaptopMedical} />}>
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
        );
    }
}

export default header;
