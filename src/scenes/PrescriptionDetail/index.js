import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import FormFilter from '../PrescriptionDetail/components/FormFilter'
import Layout from '../../layouts'
import DataTable from './components/DataTable'
import FormAddCustomer from './components/FormAddCustomer'
import FormAdd from './components/InputAddSymptomAndDisease'
import PrescriptionDetail from './components/PrescriptionDetail'
import { getDetail, addMedicine, addDetail, getListSymptoms, update } from './action'
import { getList as getListMedical } from "../Medical/action";
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSave } from '@fortawesome/free-solid-svg-icons'
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
        this.props.getListSymptoms()
        this.props.getListMedical({limit: 999})
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

    handleEdit = (values) =>{
        let id = this.props?.prescriptionDetail?.data?.id || 0
        let data={
            symptoms: (values?.symptoms || []).join(';') || '',
            diseases: (values?.diseases || []).join(';') || ''
        }
        console.log(data);
        this.props.update(id, data)
        this.setState({showForm:false})
    }

    confirmPrescription = () =>{
        let id = this.props?.prescriptionDetail?.data?.id || 0
        let data = {
            status: 2
        }
        this.props.update(id,data)
    }

    cancelPrescription = () =>{
        let id = this.props?.prescriptionDetail?.data?.id || 0
        let data = {
            status: 3
        }
        this.props.update(id,data)
    }

    handleCloseModal = (value)=>
    {
        this.setState({showForm: false})
    }
    render() {
        const { prescriptionDetail, symtoms, medical } = this.props
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
                    <div className="row px-2">
                        <div className="col-4 pt-3 bg-white px-4">
                            <Spin spinning={false} style={{ backgroundColor: '#fafafa' }}>
                                <PrescriptionDetail
                                    handleEdit={this.handleEdit}
                                    prescriptionDetail={prescriptionDetail.data}
                                    loading={prescriptionDetail.loading}
                                    diseases_symtoms={prescriptionDetail.symtoms}
                                />
                                <a onClick={()=>this.confirmPrescription()} className='btn btn-primary'> Confirm </a>
                                <a onClick={()=>this.cancelPrescription()} className='btn btn-secondary'> Cancel </a>
                            </Spin>
                        </div>
                        <div className="col-8">
                        <DataTable
                        handleShowForm={this.handleShowForm}
                        dataSource={prescriptionDetail?.data?.prescription_detail?.medicine}
                        loading={prescriptionDetail.loading}
                        prescriptionDetail={prescriptionDetail.data}
                        />
                        <Modal 
                        title="Add Medicine" 
                        visible={showForm} 
                        closable={false}
                        onCancel={this.props.handleCloseModal}
                        footer= {null}
                        >
                            <FormAddCustomer
                                destroyOnClose={true}
                                keyboard={true}
                                maskClosable={true}
                                medical={medical.data}
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
    prescriptionDetail: state.prescriptionDetail,
    symtoms: state.symtoms,
    medical: state.medical
})

const mapDispatchToProps = dispatch => ({
    getDetail: (params) => {
        dispatch(getDetail(params))
    },
    getListSymptoms: (params) => {
        dispatch(getListSymptoms(params))
    },
    addMedicine: (data) => {
        dispatch(addMedicine(data))
    },
    addDetail: (data) => {
        dispatch(addDetail(data))
    },
    update: (id,data) => {
        dispatch(update(id,data))
    },
    getListMedical: (params) => {
        dispatch(getListMedical(params))
    },
    
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
