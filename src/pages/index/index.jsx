
import React from 'react'
import { Table, Button, Modal, Tabs } from 'antd'
import { connect } from 'react-redux'
import { tableValue, listData as data } from '../../mock/list'
const { TabPane } = Tabs
// import './test.js'

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a href="www.baidu.com">Delete</a>,
    },
  ];

function callback(key) {
  console.log(key, 'tabs key');
}
function getColumn(data) {
  console.log(data, 'data')
  if(!data) {
    return []
  }
  return data.tableData[0].columnName.map(item=> {
    return {
      title: item, 
      dataIndex: item, 
      key: item
    }
  })
}
function getDataSource(data) {
  if(!data) {
    return []
  }
  const columnNames = data.tableData[0].columnName
  return data.tableData[0].data.map((item, index)=> {
    let obj = { key: index+1 }
    
    columnNames.forEach(name=> {
      if(['数据库租户', 'tenant_topology服务器'].includes(name)) {
        obj[name] = <a href={item[name].split('#url#')[1]}>{item[name].split('#url#')[0]}</a>
      } else {
        obj[name] = item[name]
      }
    })
    return obj
    return {
      key: index+1,
      "应用名": item['应用名'],
      "数据库租户": <a href={item['数据库租户'].split('#url#')[1]}>{item['数据库租户'].split('#url#')[0]}</a>,
      "tenant_topology服务器": <a href={item['tenant_topology服务器'].split('#url#')[1]}>{item['tenant_topology服务器'].split('#url#')[0]}</a>,
      "机房": item['机房'],
    }
  })
}

// const tableHeader = 
export default function Index() {


    let visible = false

    const handleOk = e => {

      };

    const handleCancel = e => {

      };

    const handleChange = (...e)=> {
        console.log(...e, 'handleChange')
    }


    return (
        <div className="index-container">
            <Button type="primary">增加</Button>
            {/* <Table
                columns={columns}
                expandable={{
                rowExpandable: record => record.name !== 'Not Expandable',
                }}
                dataSource={data}
            /> */}
            <Tabs defaultActiveKey="1" onChange={callback}>
              {
                tableValue.map((item, index)=> {
                  return <TabPane tab={item.title} key={index+1}>
                      <Table
                        title={() => item.table ? item.table.tableTitleName : 'table 为null'}
                        columns={getColumn(item.table)}
                        dataSource={getDataSource(item.table)}
                      />
                </TabPane>
                })
              }
            </Tabs>

            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {
                    Object.keys(data[0]).map(key=> {
                        return <div key={key}>
                            <span>{key}:</span>
                            <input
                            onChange={handleChange.bind(this, key)}
                            type="text" value={data[0][key]}/>
                        </div>
                    })
                }
        </Modal>

        </div>
    )
}
