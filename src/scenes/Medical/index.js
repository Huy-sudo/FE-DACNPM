import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Spin, Modal } from 'antd';
import DataTable from './components/DataTable';
import FormFilter from './components/FormFilter'
import FormAddMedicine from './components/FormAddMedicine'
import FormCreateMedicine from './components/FormCreateMedicine'
import Layout from '../../layouts'
import { getList, update, addMedicine, createMedicine, getListUses, deleteMedicine, getListUnit } from './action'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            initial_filter_values: query_params,
            showForm: false,
            showFormMedicine: false,
            initialValue: {
            }
        };

    }

    componentDidMount() {
        this.handleSubmitFilter(this.state.initial_filter_values)
        this.props.getListUses()
        this.props.getListUnit()
    }

    componentDidUpdate(prevProps, prevState) {

    }

    handleAddMedicine= (value) =>
    {
        let data={
            ...value,
            type: 1
        }
        this.props.addMedicine(data)
        this.setState({showForm:false})
    }

    handleCreateMedicine= (value) =>
    {
        let data={
            ...value,
        }
        this.props.createMedicine(data)
        this.setState({showFormMedicine:false})
    }

    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }

    handleShowFormMedicine = (value) =>{
        this.setState({showFormMedicine: value ||false})
    }

    handleSubmitFilter = (values) => {
        let params = {
            ...values,
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
    }

    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    handleCloseModalMedicine = (value) => {
        this.setState({ showFormMedicine: false })
    }

    deleteMedicine = (value) => {
        this.props.deleteMedicine(value)
    }

    handleEdit = (values) => {
        let id = values.id
        let data = {
            cost_per_med: values.values.cost_per_med
        }
        this.props.update(id, data)
        this.setState({showForm:false})
    }

    render() {
        const { medical } = this.props

        const { initial_filter_values, showForm, showFormMedicine } = this.state

        return (
            <Layout>
                <Spin spinning={false} style={{ backgroundColor: '#fafafa' }}>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Medical</span>
                    </div>
                            <FormFilter
                                initialValues={initial_filter_values}
                                onSubmit={this.handleSubmitFilter}
                            />
                            <button onClick={() => this.handleShowForm(true)} className="btn-primary btn px-2 mb-3"> Add Medicine</button>
                            <button onClick={() => this.handleShowFormMedicine(true)} className="btn-primary btn px-2 mb-3 margin-left:20px"> Create Medicine</button>
                    <div>
                        <DataTable
                            dataSource={medical.data || []}
                            loading={medical.loading}
                            medical={medical}
                            update={this.handleEdit}
                            deleteMedicine={this.deleteMedicine}
                        />
                        <Modal
                            title="Add Medicine"
                            visible={showForm}
                            closable={false}
                            onCancel={this.props.handleCloseModal}
                            footer={null}
                        >
                            <FormAddMedicine
                                destroyOnClose={true}
                                keyboard={true}
                                maskClosable={true}
                                medical={medical.data}
                                onCancel={() => this.handleShowForm(false)}
                                initialValues={{ amount: 1 }}
                                onSubmit={this.handleAddMedicine}
                                handleShowForm={this.handleShowForm}
                            />
                        </Modal>
                        <Modal
                            title="Create Medicine"
                            visible={showFormMedicine}
                            closable={false}
                            onCancel={this.props.handleCloseModalMedicine}
                            footer={null}
                        >
                            <FormCreateMedicine
                                destroyOnClose={true}
                                keyboard={true}
                                maskClosable={true}
                                medical={medical.data}
                                onCancel={() => this.handleShowFormMedicine(false)}
                                initialValues={{ amount: 1 }}
                                onSubmit={this.handleCreateMedicine}
                                handleShowFormMedicine={this.handleShowFormMedicine}
                                unit={medical.unit}
                            />
                        </Modal>
                    </div>
                </Spin>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.login.user,
    medical: state.medical,
    uses: state.uses,
    unit: state.unit
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    update: (id, data) => {
        dispatch(update(id, data))
    },
    addMedicine: (data) => {
        dispatch(addMedicine(data))
    },
    createMedicine: (data) => {
        dispatch(createMedicine(data))
    },
    getListUses: (params) => {
        dispatch(getListUses(params))
    },
    getListUnit: (params) => {
        dispatch(getListUnit(params))
    },
    deleteMedicine: (id) => {
        dispatch(deleteMedicine(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)