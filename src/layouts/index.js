import React, { Component } from 'react';
import Header1 from './header'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Affix, Button, Menu, Layout } from 'antd';
import Profile from './profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { faBookMedical, faHome, faLaptopMedical, faUser } from '@fortawesome/free-solid-svg-icons';
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
                        <Header className="header" style={{ backgroundColor: '#A3D8E8' }}>
                            <div className="d-flex justify-content-between align-items-center w-40">
                                <Menu style={{ backgroundColor: '#A3D8E8', height: '65px' }} mode="horizontal" defaultSelectedKeys={['2']} >
                                    <Menu.Item key="home" className="text-white px-5 " icon={<FontAwesomeIcon icon={faHome} />}>
                                        <Link to={`/home`} > HOME </Link>
                                    </Menu.Item>
                                    <Menu.Item key="clinic" className="text-white px-5 " icon={<FontAwesomeIcon icon={faLaptopMedical} />}>
                                        <Link to={`/prescription`} > CLINIC </Link>
                                    </Menu.Item >
                                    <Menu.Item key="customer" className="text-white px-5 " icon={<FontAwesomeIcon icon={faUser} />}>
                                        <Link to={`/customer`} > CUSTOMER </Link>
                                    </Menu.Item >

                                    <Menu.Item key="medical" className="text-white px-5 " icon={<FontAwesomeIcon icon={faBookMedical} />}>
                                        <Link to={`/medical`} > MEDICAL </Link>
                                    </Menu.Item >

                                    <Menu.Item key="dashboard" className="text-white px-5 " icon={<FontAwesomeIcon icon={faBookMedical} />}>
                                        <Link to={`/`} > DASHBOARD </Link>
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
                        minHeight: '100vh'
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
