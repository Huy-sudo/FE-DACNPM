import React, { Component } from 'react';
import Header1 from './header'
import { Affix, Button, Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header" style={{backgroundColor:'#092b00'}}>
                        <Affix offsetTop={0} >
                            <Header1 />
                        </Affix>
                    </Header>
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
