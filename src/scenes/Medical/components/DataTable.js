import React from 'react';
import { Table, Spin } from 'antd';
const DataTable = ({dataSource, loading}) => {
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
          dataIndex: 'name',
          key: 'name',
          className: 'text-left',
          render: (value,record) => 
          <div>
              <span> {value || ''}  </span>
          </div>
        },
        {
          title: 'Unit',
          dataIndex: 'unit',
          key: 'unit',
          className: 'text-left',
          render: (value,record) => 
          <div>
              <span> {value || ''}  </span>
          </div>
        },
        {
          title: 'In_stock',
          dataIndex: 'in_stock',
          key: 'in_stock',
          className: 'text-left',
          render: (value,record) => 
          <div>
              <span> {value || 0}  </span>
          </div>
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: 150,
          render: (value,record) => 
          <div>
              <span className={ value == 1 ? 'badge-success badge' : 'badge badge-danger'}>{ value == 1 ? 'Active' : 'Inactive' }</span>
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

