import React,{useState,useEffect} from 'react';
import { Descriptions, Spin } from 'antd';
import { Field, reduxForm } from 'redux-form'
import RenderInputText from '../../../share/components/RenderInputText'
import {getLabelOption, options_status_prescription} from '../../../share/options'
import EditValue from "./EditValue";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
const PrescriptionDetail = ({ prescriptionDetail, loading, handleEdit, symtoms }) => {
    const [isUpdate, setIsUpdate] = useState('')
    const handleCancelEdit = () =>{
        setIsUpdate('')
    }

    useEffect(() => {
        setIsUpdate('')
    }, [prescriptionDetail])
    let options = symtoms.map(d=>{
        return {label: d.symptom_name , value: d.symptom_name}
    })
    // console.log(getLabelOption(prescriptionDetail?.status || 0), options_status_prescription);
    return (
        <Spin spinning={loading} >
            <div>
            <Descriptions column={2} title={<div className="font-weight-bold h5 text-left">#{prescriptionDetail?.code} - 
            {getLabelOption((prescriptionDetail?.status || 0), options_status_prescription)}
            </div>} >
                <Descriptions.Item label="Customer">{prescriptionDetail?.customer?.name}</Descriptions.Item>
                <Descriptions.Item label="Phone">0{prescriptionDetail?.customer?.phone}</Descriptions.Item>
                <Descriptions.Item label="Analysis Price">{prescriptionDetail?.prescription_detail?.bill?.analysis_price}</Descriptions.Item>
                <Descriptions.Item label="Total Price">{prescriptionDetail?.prescription_detail?.bill?.analysis_price + prescriptionDetail?.prescription_detail?.price_medicines}</Descriptions.Item>
                <Descriptions.Item span={2} label="Username">{prescriptionDetail?.user?.name}</Descriptions.Item>
                <Descriptions.Item span={2} label="Symptoms">   
                    {
                        isUpdate == 'editSymptoms' ? 
                        <EditValue 
                            options={options || []}
                            onSubmit={handleEdit}
                            handleCancel={handleCancelEdit}
                        />
                        : 
                        <span> {prescriptionDetail?.symptoms} <a className="text-info"> <FontAwesomeIcon onClick={()=>setIsUpdate('editSymptoms')} icon={faEdit} />  </a> </span>
                    }
                   

                </Descriptions.Item>

            </Descriptions>
            </div>
        </Spin>
    );
}

export default PrescriptionDetail;
