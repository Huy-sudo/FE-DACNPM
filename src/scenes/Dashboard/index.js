import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Spin } from 'antd';
import Layout from '../../layouts'
import { getList } from './action'
import { connect } from 'react-redux'
import queryString from 'query-string'
import DataTable from './components/DataTable';
class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            initial_filter_values: query_params,
        };

    }

    // componentWillMount() {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    handleEdit = (values) => {
        // let id = this.props?.prescriptionDetail?.data?.id || 0
        // console.log(values);
        // let data={
        //     symptoms: (values?.Symptoms || []).join(';') || '',
        //     diseases: (values?.Diseases || []).join(';') || ''
        // }
        // this.props.update(id, data)
        // this.setState({showForm:false})
    }

    render() {
        const { variables } = this.props
        const {initial_filter_values } = this.state
        return (
            <Layout>
                <Spin spinning={false} style={{ backgroundColor: '#fafafa' }}>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Dashboard</span>
                    </div>
                    <DataTable
                        dataSource={variables?.data || []}
                        loading={variables?.loading}
                    />
                </Spin>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.login.user,
    variables: state.variables
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)