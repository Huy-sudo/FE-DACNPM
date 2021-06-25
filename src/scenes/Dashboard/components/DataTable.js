import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import EditValue from "./EditValue";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const DataTable = ({ dataSource, loading, handleEdit, dashboard, id }) => {
  const [isUpdate, setIsUpdate] = useState(0)
    const handleCancelEdit = () =>{
        setIsUpdate(0)
    }

    useEffect(() => {
        setIsUpdate(0)
    }, [dashboard])

  const columns = [
    {
      title: '#',
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
      width: 300,
      render: (value, record) => <a>{value || ''}</a>,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      width: 300,
      render: (value, record) =>
        <div>
          <span> {value} </span>
        </div>
    },
    {
      title: 'Edit',
      width: 300,
      render: (value, record) =>
        <div>
          {
            isUpdate == value.id ? 
            <EditValue
              onSubmit={handleEdit}
              handleCancel={handleCancelEdit}
            />
            :
            <span><a className="text-info"> <FontAwesomeIcon onClick={()=>setIsUpdate(value.id)} icon={faEdit} />  </a> </span>
          }
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

