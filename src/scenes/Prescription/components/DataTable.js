import React from 'react';
import { Table, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const DataTable = ({ dataSource, loading }) => {
  const columns = [
    {
      title: '#',
      width: 50,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      width: 100,
      render: (value, record) => <a>{value || ''}</a>,
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
      className: 'text-left',
      width: 250,
      render: (value, record) =>
        <div>
          <span> {value?.name || ''} - {value?.phone || ''} </span>
        </div>
    },
    {
      title: 'Date',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 150,
      render: (value, record) => <a>{record?.created_at || ''}</a>,
    },
    {
      title: 'Symptom',
      dataIndex: 'symptoms',
      key: 'symptoms',
      width: 280,
      render: (value, record) => <a>{record?.symptoms || ''}</a>,
    },
    {
      title: 'Disease',
      dataIndex: 'diseases',
      key: 'diseases',
      width: 280,
      render: (value, record) => <a>{record?.diseases || ''}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (value, record) =>
        <div>
          <span className={value == 1 ? 'text-info' : value == 3 ? 'text-danger' : 'text-success'}>{value == 1 ? 'Pending' : value == 3 ? 'Cancel' : 'Completed'}</span>
        </div>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Link to={`/prescription/${record.id}/detail`} className="btn btn-sm btn-primary">
          <span className="px-2">
            EDIT 
          </span>
        </Link>
      )
    }]
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={dataSource || []}
      loading={loading}
    />
  );
}

export default DataTable;

