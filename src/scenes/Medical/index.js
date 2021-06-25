import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Spin, Modal } from 'antd';
import DataTable from './components/DataTable';
import FormFilter from './components/FormFilter'
import FormAddMedicine from './components/FormAddMedicine'
import Layout from '../../layouts'
import { getList, update, addMedicine } from './action'
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
            initialValue: {
            }
        };

    }


    componentDidMount() {
        this.handleSubmitFilter(this.state.initial_filter_values)
    }

    componentDidUpdate(prevProps, prevState) {

    }

    handleAddMedicine= (value) =>
    {
        const { medical } = this.props
        let data={
            ...value,
            type: 1
        }
        console.log(data);
        this.props.addMedicine(data)
        this.setState({showForm:false})
    }

    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }

    handleSubmitFilter = (values) => {
        let params = {
            ...values,
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        console.log(params);
        this.props.getList(params)
    }

    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    handleEdit = (values) => {
        let id = this.props.medical.data.id
        let data = {
            values
        }
        this.props.update(id, data)
        this.setState({showForm:false})
    }

    render() {
        const { medical } = this.props

        const { initial_filter_values, showForm } = this.state

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
                            <button onClick={() => this.handleShowForm(true)} className="btn-primary btn px-2"> <FontAwesomeIcon icon={faPlus} />Add</button>
                    <div>
                        <DataTable
                            dataSource={medical.data || []}
                            loading={medical.loading}
                            medical={medical}
                            handleEdit={this.handleEdit}
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
                    </div>
                </Spin>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.login.user,
    medical: state.medical
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
})

export default connect(mapStateToProps, mapDispatchToProps)(index)