import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import FormFilter from '../Customers/components/FormFilter'
import Layout from '../../layouts'
import DataTable from './components/DataTable'
import FormAddCustomer from './components/FormAddCustomer'
import Profile from './components/Profile'
import { getList, addCustomer, addPrescription } from './action'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import queryString from 'query-string'
class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            phone: '',
            showForm: false,
            initial_filter_values: query_params
        }

    }
    componentDidMount=()=>{
        this.handleSubmitFilter(this.state.initial_filter_values)
    }
    handleSubmitFilter = ({  ...values }) => {
        let params = {
            ...values,
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
        this.setState({ phone: params?.phone || '' })
    }

    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }
    handleAddCustomer = (value) => {
        this.props.addCustomer(value)
    }
    handleOnClick = (value) => {
        
    }
    addPrescription = (value) => {
        console.log(value);
        this.props.addPrescription(value)
    }
    render() {
        const { customers } = this.props
        const { initialValue, phone, showForm } = this.state
        const initialValueFormAddCustomer = {
            phone: phone
        }
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Customers</span>
                    </div>
                        <FormFilter
                            initialValues={initialValueFormAddCustomer}
                            onSubmit={this.handleSubmitFilter}
                        />
                    {/* <Spin spinning={customers.loading} style={{ backgroundColor: '#fafafa' }}> */}
                        <DataTable
                            dataSource={customers.data || []}
                            loading={customers.loading}
                            createPrescription={this.addPrescription}
                        />
                    {/* </Spin> */}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    customers: state.Customers
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    addCustomer: (params) => {
        dispatch(addCustomer(params))
    },
    addPrescription: (params) => {
        dispatch(addPrescription(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
