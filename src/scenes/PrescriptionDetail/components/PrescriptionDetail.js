import React from 'react';
import { Descriptions, Spin } from 'antd';
const PrescriptionDetail = ({prescriptionDetail,loading}) => {
    console.log(prescriptionDetail);
    return (
        <Spin spinning={loading} >
        <Descriptions column={2} title={<span className="font-weight-bold h5">#{prescriptionDetail?.code}</span>} >
                <Descriptions.Item label="Customer">{prescriptionDetail?.customer?.name}</Descriptions.Item>
                <Descriptions.Item label="Phone">0{prescriptionDetail?.customer?.phone}</Descriptions.Item>
                <Descriptions.Item label="Symptoms">{prescriptionDetail?.prescription_detail?.symptoms}</Descriptions.Item>
                <Descriptions.Item label="Diseases">{prescriptionDetail?.prescription_detail?.diseases}</Descriptions.Item>
                <Descriptions.Item label="Analysis Price">{prescriptionDetail?.prescription_detail?.bill?.analysis_price}</Descriptions.Item>
                <Descriptions.Item label="Total Price">{prescriptionDetail?.prescription_detail?.bill?.analysis_price + prescriptionDetail?.prescription_detail?.price_medicines}</Descriptions.Item>
                <Descriptions.Item label="Username">{prescriptionDetail?.user?.name}</Descriptions.Item>
            </Descriptions>
        </Spin>
    );
}

export default PrescriptionDetail;
