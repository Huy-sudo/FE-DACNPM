import React from 'react';
import { Table, Spin, Typography  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const DataTable = ({ dataSource, loading }) => {

  const { Text } = Typography;

  const columns = [
    {
      title: '#',
      width: 50,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Medicine Name',
      dataIndex: 'medicine_id',
      width: 100,
      render: (value, record) => <a>{record?.medicine?.name || ''}</a>,
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      className: 'text-left',
      width: 50,
      render: (value, record) =>
        <div>
          <span> {record?.medicine?.unit?.value } </span>
        </div>
    },
    {
      title: 'Amount',
      dataIndex: 'total_amount',
      width: 100,
      render: (value, record) => <a>{record?.medicine.in_stock}</a>,
    },
    {
      title: 'Total time use',
      dataIndex: 'total_uses',
      width: 100,
      render: (value, record) => <a>{record?.total_uses || ''}</a>,
    },

  ]
  return (
    <Table
    columns={columns}
    dataSource={dataSource}
    loading={loading}
    pagination={false}
    bordered
  />

  );
}

export default DataTable;

