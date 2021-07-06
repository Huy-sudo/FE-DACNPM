import React from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faInfo, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const DataTable = ({ dataSource, loading, createPrescription, deleteCustomer }) => {

  const onSubmit = (values) => {
    createPrescription(values)
  }

  const onDelete = (values) => {
    deleteCustomer(values)
  }

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
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Gender',
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
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space >
          <button onClick={() => onSubmit(record?.id)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Add prescription">
              <span className="px-2">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </Tooltip>
          </button>
          <button onClick={() => onDelete(record?.id)} className="btn btn-sm btn-danger">
            <Tooltip placement="top" title="Delete customer">
              <span className="px-2">
                <FontAwesomeIcon icon={faExclamation} />
              </span>
            </Tooltip>
          </button>
          <Tooltip placement="top" title="Info">
            <Link className="px-3 btn btn-primary btn-sm" to={`/customer/${record.id}/detail`}>
              <FontAwesomeIcon icon={faInfo} />
            </Link>
          </Tooltip>
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

