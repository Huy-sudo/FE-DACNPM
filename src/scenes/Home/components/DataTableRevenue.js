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
      width: 10,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Date',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 150, 
      render: (value, record) => <a>{value || ''}</a>,
    },
    {
      title: 'Patient',
      key: 'customer',
      className: 'text-left',
      width: 50,
      render: (value, record) =>
        <div>
          <span> {record?.customer?.name}</span>
        </div>
    },
    {
      title: 'Revenue',
      dataIndex: 'analysis_price',
      key: 'total_price',
      width: 100,
      render: (value, record) => <a>{record?.analysis_price + record?.prescription_detail?.price_medicines || ''}</a>,
    },
    {
      title: 'Ratio',
      dataIndex: 'diseases',
      key: 'ratio',
      width: 50,
      render: (value, record) => <a>{record?.total_price %   1 }</a>,
    },
  ]
  return (
    <Table
    columns={columns}
    dataSource={dataSource}
    loading={loading}
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

