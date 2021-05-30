import React, { Component } from 'react';
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Profile = ({customerDetail, loading}) => {
    return (
            <Card
                hoverable={true}
                style={{ maxWidth: 500, marginTop: 16 , marginLeft: 70}}
                cover={
                    <img
                      alt="example"
                      src="https://www8.hp.com/us/en/images/PS_Desktop_HealthCare_PatientEng_F_18_18_tcm245_2557062_tcm245_2557132_tcm245-2557062.jpg"
                      style={{width: "100%",
                            height: "300px"}}
                    />
                  }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={customerDetail?.name}
                        description={customerDetail?.phone}
                    />
                </Skeleton>
            </Card>
    );
}

export default Profile;

