import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import { connect } from 'react-redux'
import FormFilter from './components/FormFilter'
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
        this.props.getListMedicine()
        let params = {
            status:2,
           }
        this.props.getListPrescription(params)
    }

    handleSubmitFilterPrescription = ({month,...values}) => {
        let params = {
            ...values,
            status:2,
           }
        if(month){
            params.from_date = date.format('YYYY-{month}-DD')
            params.to_date = date.format('YYYY-MM-DD')
        } 
        else
        {

        }
        this.props.getList(params)
    }
    }

    handleSubmitFilterMedicine = (values) => {
        let params = {
            ...values,
        }
        // if (date) {
        //     params.from_date = params.to_date = date.format('YYYY-MM-DD')
        // }
        this.props.getListMedicine(params)
    }


    render() {
        const { prescription, medicine } = this.props

        return (
            <div>
                <Layout>
                    <Spin spinning={false} style={{ backgroundColor: '#fafafa' }}>
                        <div className="row px-2">
                            <div className="col-6 pt-3 bg-white px-4">
                                <div className='container-fluid mb-3 text-left py-2'>
                                    <span className='h5 font-weight-bold '>Revenue</span>
                                </div>
                                <FormFilter
                                    onSubmit={this.handleSubmitFilterPrescription}
                                />
                                <DataTableRevenue
                                    dataSource={prescription.data || []}
                                    loading={prescription.loading}
                                />
                            </div>
                            <div className="col-6 pt-3 bg-white px-4">
                                <div className='container-fluid mb-3 text-left py-2'>
                                    <span className='h5 font-weight-bold '>Medicine</span>
                                </div>
                                <FormFilter
                                    onSubmit={this.handleSubmitFilterMedicine}
                                />
                                <DataTableMedicine
                                    dataSource={medicine.data || []}
                                    loading={medicine.loading}
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
