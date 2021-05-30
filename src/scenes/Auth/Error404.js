import { Result, Button } from 'antd';
import React, { Component } from 'react';
import Layout from '../../layouts'

class Error404 extends Component {
    render() {
        return (
            <div>
                <Layout>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary">Back Home</Button>}
                />
                </Layout>
            </div>
        );
    }
}

export default Error404;
