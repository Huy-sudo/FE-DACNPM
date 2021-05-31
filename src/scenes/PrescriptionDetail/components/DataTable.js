import React from 'react';
import { Table, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'
const DataTable = ({dataSource, loading, handleShowForm}) => 
{
  console.log(dataSource);
    const columns = [
        {
            title: '#',
            width: 100,
            render: (value,record,i) => <a>{i+1}</a>,
          },
        {
          title: 'Code',
          dataIndex: 'code',
          key: 'code',
          render: (value,record) => <a>{value || ''}</a>,
        },
        {
          title: 'Name',
          dataIndex: 'medicine',
          key: 'medicine',
          className: 'text-left',
          render: (value,record) => 
          <div>
              <span> {value?.name || ''} ( {value?.cost_per_med || ''} )</span>
          </div>
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
          className: 'text-left',
          render: (value,record) => 
          <div>
              <span> {value} </span>
          </div>
        },
        {
          title: 'Price',
          className: 'text-left',
          render: (value,record) => 
          <div>
              <span> {(record?.amount || 0) * (record?.medicine?.cost_per_med || 1)} </span>
          </div>
        },
        ]
    return (
        <Table 
        rowKey="id"
        title={() =>
          <div className="d-flex justify-content-between align-item-center">
            <span className="h5 font-weight-bold">Medicines</span>
            <button onClick={()=>handleShowForm(true)} className="btn-primary btn px-2"> <FontAwesomeIcon icon={faPlus} />Add</button>
          </div>
        }
        columns={columns} 
        dataSource={dataSource || []} 
        loading = {loading}
        pagination = {false}
        />
    );
}

export default DataTable;
