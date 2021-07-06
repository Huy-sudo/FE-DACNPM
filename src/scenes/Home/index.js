import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import { connect } from 'react-redux'
import FormFilterMedicine from './components/FormFilterMedicine'
import FormFilterRevenue from './components/FormFilterRevenue'
import Layout from '../../layouts'
import DataTableRevenue from './components/DataTableRevenue'
import DataTableMedicine from './components/DataTableMedicine'
import queryString from 'query-string'
import { getListPrescription, getListMedicine } from './action'
import moment from 'moment'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        let paramsPrescription = {
            month: 6
        }
        let paramsMedicine = {
            status: 1,
            month: 6
        }
        this.handleSubmitFilterPrescription(paramsPrescription)
        this.handleSubmitFilterMedicine(paramsMedicine)
        console.log(this.props.home);
    }

    handleSubmitFilterPrescription = ({ month, ...values }) => {
        let params = {
            ...values,
            status: 2,
        }
        if (month) {
            params.month = month
        }
        else {
            month = 6
            params.month = month
        }
        this.props.getListPrescription(params)
    }

    handleSubmitFilterMedicine = ({ month, ...values }) => {
        let params = {
            ...values,
            status: 1
        }
        if (month) {
            params.month = month
        }
        else {
            month = 6
            params.month = month
        }
        this.props.getListMedicine(params)
    }

    render() {
        const { home } = this.props

        return (
            <div>
                <Layout>
                    <Spin spinning={false} style={{ backgroundColor: '#fafafa' }}>
                        <div className="row px-2">
                            <div className="col-6 pt-3 bg-white px-4">
                                <div className='container-fluid mb-3 text-left py-2'>
                                    <span className='h5 font-weight-bold '>Revenue</span>
                                </div>
                                <FormFilterRevenue
                                    onSubmit={this.handleSubmitFilterPrescription}
                                />
                                <DataTableRevenue
                                    dataSource={home.prescription || []}
                                    loading={home.loading}
                                />  
                            </div>
                            <div className="col-6 pt-3 bg-white px-4">
                                <div className='container-fluid mb-3 text-left py-2'>
                                    <span className='h5 font-weight-bold '>Medicine</span>
                                </div>
                                <FormFilterMedicine
                                    onSubmit={this.handleSubmitFilterMedicine}
                                />
                                <DataTableMedicine
                                    dataSource={home.medicine || []}
                                    loading={home.loading}
                                />
                            </div>
                        </div>
                    </Spin>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    home:state.home,
    prescription: state.prescription,
    medicine: state.medicine
})

const mapDispatchToProps = dispatch => ({
    getListPrescription: (params) => {
        dispatch(getListPrescription(params))
    },
    getListMedicine: (params) => {
        dispatch(getListMedicine(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
