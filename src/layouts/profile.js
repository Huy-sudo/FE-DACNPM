import React from 'react';
import { Menu, Dropdown, Space,Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faSortDown, faUser, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const profile = () => {
    return (
        <div>
            <Dropdown 
                trigger={['click']}
                overlay={(
                    <Menu>
                        <Menu.Item key="0">
                            <Link to={'/profile/dashboard'}><FontAwesomeIcon style={{width: 20}} icon={faUser}/> {('Profile')}</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={ '/setting/user/change-password'}><FontAwesomeIcon style={{width: 20}} icon={faLock}/> {('Change password')}</Link>
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="5">
                            <a href={'/auth/logout'}><FontAwesomeIcon style={{width: 20}} icon={faSignOutAlt}/> {('Sign Out')}</a>
                        </Menu.Item>
                    </Menu>
                )} 
            >
                <Space className="cursor-pointer">
                    <Avatar >USER</Avatar>    
                    <FontAwesomeIcon style={{fontSize: 20}} icon={faSortDown}/>
                </Space>
            </Dropdown> 
        </div>
    );
}

export default profile;
