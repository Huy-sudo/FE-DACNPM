import React, { useState, useEffect } from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faInfo, faExclamation, faEdit } from '@fortawesome/free-solid-svg-icons'
import EditValue from "./EditValue";

const DataTable = ({ dataSource, loading, medical, update, deleteMedicine }) => {
  const [isUpdate, setIsUpdate] = useState(0)


  const onSubmit = (values) => {
    deleteMedicine(values)
  }

  const handleCancelEdit = () => {
    setIsUpdate(0)
  }

  const handleEdit = (values) => {
    let data = {
        values,
        id: isUpdate
    }
    update(data)
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
          <span> {record?.unit?.value || ''}  </span>
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
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space >
          <button onClick={() => onSubmit(record?.id)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Delete Medicine">
              <span className="px-2">
                <FontAwesomeIcon icon={faExclamation} />
              </span>
            </Tooltip>
          </button>
          </Space>
        )
    }
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

