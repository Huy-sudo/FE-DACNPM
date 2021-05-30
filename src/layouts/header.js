import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import Profile from './profile'
const { SubMenu } = Menu;
class header extends Component {

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {

        return (
            
            // <div className="d-flex justify-content-between">
                    <Menu mode="horizontal" className="d-flex justify-content-between align-item:center" style={{backgroundColor:'#237804'}} >
                        <Menu.Item key="mail" className="text-white " icon={<MailOutlined />}>
                            Phong Mach 
                        </Menu.Item>
                        <Menu.Item key="12312" className="text-white " icon={<MailOutlined />}>
                            Navigatioewewn One
                        </Menu.Item >
                        <Menu.Item key="1" className="" style={{ marginRight: 0,  }} >
                        <Profile></Profile>
                        </Menu.Item>
                    </Menu>
                    // <Menu>

                    //     <Menu.Item key="1" className="" style={{ marginRight: 0 }} >
                    //         <Profile></Profile>
                    //     </Menu.Item>
                    // </Menu>
            // </div>


        );
    }
}

export default header;
