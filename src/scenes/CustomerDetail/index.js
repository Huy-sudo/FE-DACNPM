import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import Layout from '../../layouts'
import Past from './components/Past'
import FormAddCustomer from './components/FormAddCustomer'
import Profile from './components/Profile'
import { getDetail } from './action'
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

    componentDidMount = () => {
        this.props.getDetail(this.props.match.params?.id)
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
        const { customerDetail } = this.props
        console.log(customerDetail.data);
        const { initialValue, phone, showForm } = this.state
        const initialValueFormAddCustomer = {
            phone: phone
        }
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold'> Customer Detail </span>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Spin spinning={customerDetail.loading} style={{ backgroundColor: '#fafafa' }}>
                                <Profile />
                                <Modal
                                    title="Add Customer"
                                    visible={showForm}
                                    onOk={() => { console.log(123) }}
                                    footer={null}
                                >
                                    <FormAddCustomer
                                        initialValues={initialValueFormAddCustomer}
                                        onSubmit={this.handleAddCustomer}
                                        handleShowForm={this.handleShowForm}
                                    />
                                </Modal>
                            </Spin>
                        </div>
                        <div className="col-6">
                            <Past />
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    customerDetail: state.customerDetail
})

const mapDispatchToProps = dispatch => ({
    getDetail: (params) => {
        dispatch(getDetail(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
