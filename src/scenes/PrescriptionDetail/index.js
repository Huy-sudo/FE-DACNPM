import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import Layout from '../../layouts'
import DataTable from './components/DataTable'
import FormAddCustomer from './components/FormAddMedicine'
import PrescriptionDetail from './components/PrescriptionDetail'
import { getDetail, addMedicinePD, addDetail, getListSymptoms, update, getListUses, deleteMedicinePD, createBill, updateBill, createInventory } from './action'
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
            },
        }
    }

    componentDidMount = () => {
        this.props.getDetail(this.props.match.params?.id)
        
        this.props.getListSymptoms()
        this.props.getListMedical({
            limit: 999
        })
        this.props.getListUses()
    }

    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
        let total_price123 = this.props?.prescriptionDetail?.data?.analysis_price + this.props?.prescriptionDetail?.data?.prescription_detail?.price_medicines;
        let params = {
            PD_code: this.props?.prescriptionDetail?.data?.prescription_detail?.code,
            total_price: total_price123
        }
        this.props.createBill(params)
    }

    handleAddMedicine = (value) => {
        const { prescriptionDetail } = this.props
        let data = {
            ...value,
            PD_code: prescriptionDetail.data?.prescription_detail?.code || -1,
            prescription_detail_id: this.props.match.params?.id || 0
        }
        this.props.addMedicinePD(data)
        this.setState({ showForm: false })
    }

    handleEdit = (values) => {
        let id = this.props?.prescriptionDetail?.data?.id || 0
        let data = {
            symptoms: (values?.Symptoms || []).join(';') || '',
            diseases: (values?.Diseases || []).join(';') || ''
        }
        this.props.update(id, data)
    }

    handleDelete = (values) => {
        let idPD = this.props?.prescriptionDetail?.data?.id || 0
        let id = values
        this.props.deleteMedicinePD(id, idPD)
    }

    confirmPrescription = () => {
        let id = this.props?.prescriptionDetail?.data?.id || 0
        let data = {
            status: 2
        }
        this.props.update(id, data)
        this.DataModal(this.props?.prescriptionDetail?.data)
    }

    cancelPrescription = () => {
        let id = this.props?.prescriptionDetail?.data?.id || 0
        let data = {
            status: 3
        }
        this.props.update(id, data)
    }

    updateBill = (id) => {
        let data = {
            status: 2
        }
        this.props.updateBill(id,data)
    }

    DataModal = (data) => {
        Modal.info({
          title: 'Bill',
          content: (
            <div>
            <div className="modal_data_wrapper">
            Customer Name: {data.customer.name}
            </div>
            <div>Date: {data.updated_at}</div>
            <div>Diseases: {data.diseases}</div>
            <div>Symptoms: {data.symptoms}</div>
            <div>Doctor: {data.user.name}</div>
            <div>Total Price is: {data.analysis_price + data.prescription_detail.price_medicines}</div>
            <button type="button" className="ant-btn ant-btn-primary" onClick={() => this.updateBill(data?.prescription_detail?.bill?.id)}>Pay Now</button>
            </div>
          ),
          })}
          
    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    render() {
        const { prescriptionDetail, medical } = this.props
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
                                    symtoms={prescriptionDetail.symtoms}
                                />
                                <a onClick={() => this.confirmPrescription()}  className='btn btn-primary'> Confirm </a>
                                <a onClick={() => this.cancelPrescription()} className='btn btn-secondary'> Cancel </a>
                            </Spin>
                        </div>
                        <div className="col-8">
                            <DataTable
                                handleShowForm={this.handleShowForm}
                                dataSource={prescriptionDetail?.data?.prescription_detail?.medicine}
                                loading={prescriptionDetail.loading}
                                prescriptionDetail={prescriptionDetail.data}
                                deleteMedicine={this.handleDelete}
                            />
                            <Modal
                                title="Add Medicine"
                                visible={showForm}
                                closable={false}
                                onCancel={this.props.handleCloseModal}
                                footer={null}
                            >
                                <FormAddCustomer
                                    destroyOnClose={true}
                                    keyboard={true}
                                    maskClosable={true}
                                    medical={medical.data}
                                    onCancel={() => this.handleShowForm(false)}
                                    initialValues={{ amount: 1 }}
                                    onSubmit={this.handleAddMedicine}
                                    handleShowForm={this.handleShowForm}
                                    uses={prescriptionDetail.uses}
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
    medical: state.medical,
    uses: state.uses
})

const mapDispatchToProps = dispatch => ({
    getDetail: (params) => {
        dispatch(getDetail(params))
    },
    getListSymptoms: (params) => {
        dispatch(getListSymptoms(params))
    },
    addMedicinePD: (data) => {
        dispatch(addMedicinePD(data))
    },
    addDetail: (data) => {
        dispatch(addDetail(data))
    },
    update: (id, data) => {
        dispatch(update(id, data))
    },
    getListMedical: (params) => {
        dispatch(getListMedical(params))
    },
    getListUses: (params) => {
        dispatch(getListUses(params))
    },
    deleteMedicinePD: (id, idPD) => {
        dispatch(deleteMedicinePD(id, idPD))
    },
    createBill: (params) => {
        dispatch(createBill(params))
    },
    updateBill: (id, data) => {
        dispatch(updateBill(id, data))
    },
    createInventory: (params) => {
        dispatch(createInventory(params))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
