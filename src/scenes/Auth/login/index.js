import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import { connect } from 'react-redux'
import Layout from '../../../layouts/index'
import FormLogin from './components/FormLogin'
import {login} from './action'
import Cookies from 'js-cookie'

class index extends Component {

    componentDidMount=()=>{

    }
    handleSubmit = (value) =>{
        this.props.login(value);
    }
    render() {
        const {data} = this.props
        return (
            <Layout>
                <Spin spinning={data.loading} >
                <FormLogin onSubmit={this.handleSubmit}/>
                </Spin>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.login
})

const mapDispatchToProps = dispatch => ({
        login: (params) => {
            dispatch(login(params))
        },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)