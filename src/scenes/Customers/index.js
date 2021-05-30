import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import FormFilter from '../Customers/components/FormFilter'
import Layout from '../../layouts'
import DataTable from './components/DataTable'
import FormAddCustomer from './components/FormAddCustomer'
import Profile from './components/Profile'
import { getList, addCustomer } from './action'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            showForm: false,
            initialValue: {
            }
        }

    }
    handleSubmit = ({ date, ...values }) => {
        let params = {
            ...values,
        }
        if (values.date) {
            params.from_date = params.to_date = values.date.format('YYYY-MM-DD')
        }

        this.handleSubmitFilter(params)
    }
    handleSubmitFilter = (params) => {
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
                    <Spin spinning={customers.loading} style={{ backgroundColor: '#fafafa' }}>

                        <FormFilter
                            initialValues={initialValue}
                            onSubmit={this.handleSubmit}
                        />
                        {/* {list.data[0]?.id &&
                        <Profile
                            customers={list.data[0] || {}}
                        />}
                        {phone>0 && !list.data[0]?.id && list.loading == false &&
                        <div>
                        <Alert message="Phone number not found" type="error" />
                        <span onClick={()=>this.handleShowForm(true)} className="btn btn-primary pt-3"> <FontAwesomeIcon icon={faPlus} /> Add Customer </span>
                        </div>
                        }
                        <Modal 
                        title="Add Customer" 
                        visible={showForm} 
                        onOk={()=>{console.log(123)}} 
                        footer= {null}
                        >
                            <FormAddCustomer
                                 initialValues={initialValueFormAddCustomer}
                                 onSubmit={this.handleAddCustomer}
                                 handleShowForm={this.handleShowForm}
                                 abc={5}
                            />
                        </Modal> */}
                        <DataTable
                            dataSource={customers.data || []}
                            loading={customers.loading}
                        />
                    </Spin>
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

})

export default connect(mapStateToProps, mapDispatchToProps)(index)
