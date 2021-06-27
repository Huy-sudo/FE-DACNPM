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
      title: 'Date',
      dataIndex: 'created_at',
      key: 'date',
      width: 100,
      render: (value, record) => <a>{value || ''}</a>,
    },
    {
      title: 'Number of patients',
      dataIndex: 'customer',
      key: 'customer',
      className: 'text-left',
      width: 200,
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
      width: 200,
      render: (value, record) => <a>{record?.symptoms || ''}</a>,
    },
    {
      title: 'Disease',
      dataIndex: 'diseases',
      key: 'diseases',
      width: 200,
      render: (value, record) => <a>{record?.diseases || ''}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (value, record) =>
        <div>
          <span className={value == 1 ? 'text-info' : 'text-success'}>{value == 1 ? 'Pending' : 'Completed'}</span>
        </div>
    },
  ]
  return (
    <Table
    columns={columns}
    dataSource={dataSource}
    pagination={false}
    bordered
    summary={pageData => {
      let totalBorrow = 0;
      let totalRepayment = 0;

      pageData.forEach(({ borrow, repayment }) => {
        totalBorrow += borrow;
        totalRepayment += repayment;
      });
      return (
        <>
          <Table.Summary.Row>
            <Table.Summary.Cell>Total</Table.Summary.Cell>
            <Table.Summary.Cell>
              <Text type="danger">{totalBorrow}</Text>
            </Table.Summary.Cell>
            <Table.Summary.Cell>
              <Text>{totalRepayment}</Text>
            </Table.Summary.Cell>
          </Table.Summary.Row>
          <Table.Summary.Row>
            <Table.Summary.Cell>Balance</Table.Summary.Cell>
            <Table.Summary.Cell colSpan={2}>
              <Text type="danger">{totalBorrow - totalRepayment}</Text>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </>
      );
    }}
  />

  );
}

export default DataTable;

