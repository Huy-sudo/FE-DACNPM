import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Spin } from 'antd';
import DataTable from './components/DataTable';
import FormFilter from './components/FormFilter'
import Layout from '../../layouts'
import { getList } from './action'
import { connect } from 'react-redux'
import queryString from 'query-string'
class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = { 
            initial_filter_values: query_params,
        };

    }

    componentWillMount() {  

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    handleSubmitFilter = ({date,...values}) => {
        console.log(date);
        let params = {
            ...values,
           }
        if(date){
            params.from_date =  params.to_date = date.format('YYYY-MM-DD')
        } 
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
    }

    render() {
        const {medical} = this.props

        const {initial_filter_values } = this.state

        return (
            <Layout>
                <Spin spinning={false} style={{ backgroundColor: '#fafafa' }}>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Medical</span>
                    </div>
                    <FormFilter
                            initialValues={initial_filter_values}
                            onSubmit={this.handleSubmitFilter}
                        />
                        <DataTable 
                            dataSource={medical.data || []}
                            loading={medical.loading}
                        />
                </Spin>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.login.user
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)