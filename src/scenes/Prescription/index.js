import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import { connect } from 'react-redux'
import FormFilter from '../Prescription/components/FormFilter'
import Layout from '../../layouts'
import DataTable from './components/DataTable'

import {getList} from './action'
import moment from 'moment'
class index extends Component {
    constructor(props) {
        super(props);
        this.state={
            initialValue: {

            }
        }
    }
    componentDidMount(){
        this.handleSubmitFilter({data_customer:1})
    }
    handleSubmit = ({date,...values}) => {
        
        let params = {
            ...values,
            data_customer:1
           }
        if(values.date){
            params.from_date =  params.to_date = values.date.format('YYYY-MM-DD')
        }
       
        this.handleSubmitFilter(params)
    }
    handleSubmitFilter =(params)=>{
        this.props.getList(params)
    }
    render() {
        const {prescriptions} = this.props
        const {initialValue } = this.state
        console.log(prescriptions.data)
        return (
            <div>
                <Layout>
                <Spin spinning={false}  style={{backgroundColor:'#fafafa'}}>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Prescriptions</span>
                    </div>
                        <FormFilter
                            initialValues={initialValue}
                            onSubmit={this.handleSubmit}
                        />
                        <DataTable 
                            dataSource={prescriptions.data || []}
                            loading={prescriptions.loading}
                        />
                </Spin>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    prescriptions: state.prescriptions
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
