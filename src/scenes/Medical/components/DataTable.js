import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons'
import EditValue from "./EditValue";

const DataTable = ({ dataSource, loading, medical, handleEdit }) => {
  const [isUpdate, setIsUpdate] = useState(0)

  const handleCancelEdit = () => {
    setIsUpdate(0)
  }

  useEffect(() => {
    setIsUpdate(0)
  }, [medical])
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
          <span> {value || ''}  </span>
        </div>
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {record?.unit?.id + ' - ' + record?.unit?.value || ''}  </span>
        </div>
    },
    {
      title: 'In_stock',
      dataIndex: 'in_stock',
      key: 'in_stock',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || 0}  </span>
        </div>
    },
    {
      title: 'Price',
      dataIndex: 'cost_per_med',
      key: 'cost_per_med',
      width: 300,
      render: (value, record) =>
        <div>
          {
            isUpdate == record.id ?
              <EditValue
                onSubmit={handleEdit}
                handleCancel={handleCancelEdit}
              />
              :
              <span>{value}<a className="text-info"> <FontAwesomeIcon onClick={() => setIsUpdate(record.id)} icon={faEdit} />  </a> </span>
          }          
        </div>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      render: (value, record) =>
        <div>
          <span className={value == 1 ? 'badge-success badge' : 'badge badge-danger'}>{value == 1 ? 'Active' : 'Inactive'}</span>
        </div>
    },
  ]
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

