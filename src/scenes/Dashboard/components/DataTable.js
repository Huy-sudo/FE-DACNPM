import React, {useState, useEffect} from 'react';
import { Table, Spin } from 'antd';
import EditValue from "./EditValue";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const DataTable = ({ dataSource, loading}) => {
  const columns = [
    {
      title: '#',
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 200,
      render: (value, record) => <a>{value || ''}</a>,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      width: 300,
      render: (value, record) =>
        <div>
            <span> {value?.value} <a className="text-edit"> <FontAwesomeIcon icon={faEdit} />  </a> </span>
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

