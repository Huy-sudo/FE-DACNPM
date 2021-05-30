import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import FormFilter from '../PrescriptionDetail/components/FormFilter'
import Layout from '../../layouts'
import DataTable from './components/DataTable'
import FormAddCustomer from './components/FormAddCustomer'
import PrescriptionDetail from './components/PrescriptionDetail'
import { getDetail, addMedicine } from './action'
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

    componentDidMount=()=>{
        this.props.getDetail(this.props.match.params?.id)
    }

    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }

    handleAddMedicine= ({uses, ...value}) =>
    {
        const { prescriptionDetail } = this.props
        let data={
            ...value,
            uses: parseInt(uses),
            PD_code:prescriptionDetail.data?.prescription_detail?.code || -1,
            prescription_detail_id:this.props.match.params?.id || 0
        }
        this.props.addMedicine(data)
        this.setState({showForm:false})
    }

    handleCloseModal = (value)=>
    {
        this.setState({showForm: false})
    }
    render() {
        const { prescriptionDetail } = this.props
        console.log(prescriptionDetail);
        const { initialValue, phone, showForm } = this.state
        const initialValueFormAddCustomer = {
            phone: phone
        }
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Prescription Detail</span>
                    </div>
                    <div className="row">
                        <div className="col-4 pt-3 bg-white">
                            <Spin spinning={false} style={{ backgroundColor: '#fafafa' }}>
                                <PrescriptionDetail
                                    prescriptionDetail={prescriptionDetail.data}
                                    loading={prescriptionDetail.loading}
                                />
                            </Spin>
                        </div>
                        <div className="col-8">
                        <DataTable
                        handleShowForm={this.handleShowForm}
                        dataSource={prescriptionDetail?.data?.prescription_detail?.medicine}
                        loading={prescriptionDetail.loading}
                        />
                        <Modal 
                        title="Add Medicine" 
                        visible={showForm} 
                        onOk={()=>{console.log(123)}} 
                        closable={true}
                        onCancel={this.props.handleCloseModal}
                        footer= {null}
                        >
                            <FormAddCustomer
                                destroyOnClose={true}
                                keyboard={true}
                                closable
                                maskClosable={true}
                                onCancel={()=>this.handleShowForm(false)}
                                initialValues={{amount:1}}
                                onSubmit={this.handleAddMedicine}
                                handleShowForm={this.handleShowForm}
                            />
                        </Modal> 
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    prescriptionDetail: state.prescriptionDetail
})

const mapDispatchToProps = dispatch => ({
    getDetail: (params) => {
        dispatch(getDetail(params))
    },
    addMedicine: (data) => {
        dispatch(addMedicine(data))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
