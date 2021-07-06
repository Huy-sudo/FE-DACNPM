import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import FormFilter from '../Customers/components/FormFilter'
import Layout from '../../layouts'
import DataTable from './components/DataTable'
import FormAddCustomer from './components/FormAddCustomer'
import Profile from './components/Profile'
import { getList, addCustomer, addPrescription, deleteCustomer } from './action'
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
            status:1
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
        this.setState({ phone: params?.phone || '' })
    }

    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }
    
    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    handleAddCustomer = (value) => {
        this.props.addCustomer(value)
        this.setState({ showForm: false })
    }
  
    addPrescription = (value) => {
        let data = {
            customer_id: value
        }
        this.props.addPrescription(data)
    }

    deleteCustomer = (value) => {
        this.props.deleteCustomer(value)
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
                        <button onClick={() => this.handleShowForm(true)} className="btn-primary btn px-2 mb-3 ml-10"> Create Customer</button>
                    {/* <Spin spinning={customers.loading} style={{ backgroundColor: '#fafafa' }}> */}
                        <DataTable
                            dataSource={customers.data || []}
                            loading={customers.loading}
                            createPrescription={this.addPrescription}
                            deleteCustomer={this.deleteCustomer}
                        />
                        <Modal
                            title="Add Customer"
                            visible={showForm}
                            closable={false}
                            onCancel={this.props.handleCloseModal}
                            footer={null}
                        >
                            <FormAddCustomer
                                destroyOnClose={true}
                                keyboard={true}
                                maskClosable={true}
                                onCancel={() => this.handleShowForm(false)}
                                initialValues={{ amount: 1 }}
                                onSubmit={this.handleAddCustomer}
                                handleShowForm={this.handleShowForm}
                            />
                        </Modal>
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
    addPrescription: (data) => {
        dispatch(addPrescription(data))
    },
    deleteCustomer: (id) => {
        dispatch(deleteCustomer(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
