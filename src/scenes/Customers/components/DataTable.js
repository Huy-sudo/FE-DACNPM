import React from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faInfo } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const DataTable = ({ dataSource, loading }) => {
  console.log(dataSource);
  const columns = [
    {
      title: '#',
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      render: (value, record) => <a>{value || ''}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> 0{value || ''} </span>
        </div>
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      key: 'sex',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Birth',
      dataIndex: 'birth',
      key: 'birth',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      render: (value, record) =>
        <div>
          <span className={value == 1 ? 'badge-success badge p-2' : 'badge badge-danger p-2'}>{value == 1 ? 'Activate' : 'Deleted'}</span>
        </div>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space >
          <Link to={`/prescription`} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Add prescription">
            <span className="px-2">
            <FontAwesomeIcon icon={faPlus} />
               </span>
            </Tooltip>
          </Link>
          <button className="btn btn-sm btn-info">
            <Tooltip placement="top" title="Info">
              <span className="px-2">
            <FontAwesomeIcon icon={faInfo} />
              </span>
            </Tooltip>
          </button>
        </Space>
      ),
    },]
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

