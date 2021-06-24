import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import { connect } from 'react-redux'
import FormFilter from '../Prescription/components/FormFilter'
import Layout from '../../layouts'
import DataTable from './components/DataTable'
import queryString from 'query-string'
import {getList} from './action'
import moment from 'moment'
class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = { 
            initial_filter_values: query_params,
        };
    }
    componentDidMount(){
        this.handleSubmitFilter(this.state.initial_filter_values)
    }

    handleSubmitFilter = ({date,...values}) => {
        let params = {
            ...values,
            data_customer:1
           }
        if(date){
            params.from_date =  params.to_date = date.format('YYYY-MM-DD')
        } 
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
    }

    render() {
        const {prescriptions} = this.props
        const {initial_filter_values } = this.state

        return (
            <div>
                <Layout>
                <Spin spinning={false}  style={{backgroundColor:'#fafafa'}}>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Prescriptions</span>
                    </div>
                        <FormFilter
                            initialValues={initial_filter_values}
                            onSubmit={this.handleSubmitFilter}
                        />
                        <DataTable
                            dataSource={prescriptions.data || []}
                            loading={prescriptions.loading}
                        />
                </Spin>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    prescriptions: state.prescriptions
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
