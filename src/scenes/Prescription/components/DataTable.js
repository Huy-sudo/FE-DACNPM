import React from 'react';
import { Table, Spin } from 'antd';
const DataTable = ({dataSource, loading}) => {
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
          title: 'Customer',
          dataIndex: 'customer',
          key: 'customer',
          className: 'text-left',
          render: (value,record) => 
          <div>
              <span> {value?.name || ''} - {value?.phone || ''} </span>
          </div>
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: 150,
          render: (value,record) => 
          <div>
              <span className={ value == 1 ? 'text-info' : 'text-success'}>{ value == 1 ? 'Pending' : 'Completed' }</span>
          </div>
        },]
    return (
        <Table 
        rowKey="id"
        columns={columns} 
        dataSource={dataSource || []} 
        loading = {loading}
        />
    );
}

export default DataTable;

