import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Spin } from 'antd';
import Layout from '../../layouts'
import { getList, update } from './action'
import { connect } from 'react-redux'
import queryString from 'query-string'
import DataTable from './components/DataTable';
import EditValue from './components/EditValue';

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

    componentDidMount() {
        this.props.getList()
    }

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
        let data={
            value: values.value || 0
        }
        console.log(values.id);
        this.props.update(id,data)
    }

    render() {
        const { dashboard } = this.props
        return (
            <Layout>
                <Spin spinning={false} style={{ backgroundColor: '#fafafa' }}>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Dashboard</span>
                    </div>
                    <DataTable
                        dataSource={dashboard?.data || []}
                        loading={dashboard?.loading}
                        dashboard={dashboard}
                        handleEdit={this.handleEdit}

                    />
                </Spin>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.login.user,
    dashboard: state.dashboard
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    update: (id, data) => {
        dispatch(update(id, data))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)