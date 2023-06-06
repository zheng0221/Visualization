import React from 'react'
import { Row, Col, Card, Table, Icon } from 'antd'

class Tables extends React.Component {
  render() {
    const dataSource1 = [
      {
        key: '1',
        name: '郑锦龙',
        number: '22210980123',
        school: '大数据学院',
        major: '统计学'
      },
      {
        key: '2',
        name: '杨文杰',
        number: '22210980118',
        school: '大数据学院',
        major: '统计学'
      },
      {
        key: '3',
        name: '顾永翀',
        number: '22210980104',
        school: '大数据学院',
        major: '统计学'
      }
    ]

    const columns1 = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '学号',
        dataIndex: 'number',
        key: 'number'
      },
      {
        title: '学院',
        dataIndex: 'school',
        key: 'school'
      },
      {
        title: '专业',
        dataIndex: 'major',
        key: 'major'
      }
    ]

    const columns2 = [
      {
        title: 'ID_',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>

      },
      {
        title: 'Description',
        dataIndex: 'use',
        key: 'use'
      }
      // {
      //   title: '住址',
      //   dataIndex: 'address',
      //   key: 'address'
      // },
      // {
      //   title: '操作',
      //   key: 'action',
      //   render: (text, record) => (
      //     <span>
      //       <a>
      //         <Icon type="edit" />
      //       </a>
      //       <span className="ant-divider" />
      //       <a>
      //         <Icon type="delete" />
      //       </a>
      //       <span className="ant-divider" />
      //       <a className="ant-dropdown-link">
      //         <Icon type="ellipsis" />
      //       </a>
      //     </span>
      //   )
      // }
    ]
    const dataSource2 = [
      {
        key: '1',
        name: <a>1</a>,
        use: '使用可视分析来识别知识图谱中存在的业务群体中的异常情况。回答限制使用400字和5张图片。'
      },
      {
        key: '2',
        name: <a>2</a>,
        use: '开发一种可视分析流程，找出相似的企业并将它们分组。这个分析应该侧重于企业最重要的特征，并清晰地向用户呈现这些特征。回答限制使用400字和5张图片。',
      },
      {
        key: '3',
        name: <a>3</a>,
        use: '衡量在上一问题中分组的企业的相似度。通过可视化方式体现对分组结果的置信度。回答限制使用400字和4张图片。',
      },
      {
        key: '4',
        name: <a>4</a>,
        use: '基于你的可视化，提供支持或反驳异常公司参与非法捕捞案的证据。FI应该进一步调查哪些业务群体？回答限制使用600字和6张图片。',
      },
      {
        key: '5',
        name: <a>5</a>,
        use: '反思：在处理这个知识图谱时，最困难的方面是什么？你是否拥有完成挑战所需的工具和资源？哪些额外的资源会对你有所帮助？回答限制使用300字。',
      },
    ]

    // const columns3 = [
    //   {
    //     title: '姓名',
    //     dataIndex: 'name',
    //     filters: [
    //       {
    //         text: 'Joe',
    //         value: 'Joe'
    //       },
    //       {
    //         text: 'Jim',
    //         value: 'Jim'
    //       },
    //       {
    //         text: 'Submenu',
    //         value: 'Submenu',
    //         children: [
    //           {
    //             text: 'Green',
    //             value: 'Green'
    //           },
    //           {
    //             text: 'Black',
    //             value: 'Black'
    //           }
    //         ]
    //       }
    //     ],
    //     // specify the condition of filtering result
    //     // here is that finding the name started with `value`
    //     onFilter: (value, record) => record.name.indexOf(value) === 0,
    //     sorter: (a, b) => a.name.length - b.name.length
    //   },
    //   {
    //     title: '年龄',
    //     dataIndex: 'age',
    //     sorter: (a, b) => a.age - b.age
    //   },
    //   {
    //     title: '住址',
    //     dataIndex: 'address',
    //     filters: [
    //       {
    //         text: 'London',
    //         value: 'London'
    //       },
    //       {
    //         text: 'New York',
    //         value: 'New York'
    //       }
    //     ],
    //     filterMultiple: false,
    //     onFilter: (value, record) => record.address.indexOf(value) === 0,
    //     sorter: (a, b) => a.address.length - b.address.length
    //   }
    // ]
    //
    // const dataSource3 = [
    //   {
    //     key: '1',
    //     name: 'John Brown',
    //     age: 32,
    //     address: 'New York No. 1 Lake Park'
    //   },
    //   {
    //     key: '2',
    //     name: 'Jim Green',
    //     age: 42,
    //     address: 'London No. 1 Lake Park'
    //   },
    //   {
    //     key: '3',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park'
    //   },
    //   {
    //     key: '4',
    //     name: 'Jim Red',
    //     age: 32,
    //     address: 'London No. 2 Lake Park'
    //   }
    // ]

    return (
      <div className="gutter-example table-demo">
        <Row gutter={10}>
          <Col className="gutter-row" md={24}>
            <div className="gutter-box">
              <Card title="Member introduction" bordered={false}>
                <Table
                  dataSource={dataSource1}
                  columns={columns1}
                  size="middle"
                />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col className="gutter-row" md={24}>
            <div className="gutter-box">
              <Card title="MC3 Task Information" bordered={false}>
                <Table
                  dataSource={dataSource2}
                  columns={columns2}
                  size="middle"
                />
              </Card>
            </div>
          </Col>
        </Row>
        {/*<Row gutter={10}>*/}
        {/*  <Col className="gutter-row" md={24}>*/}
        {/*    <div className="gutter-box">*/}
        {/*      <Card title="基础表格 - 筛选" bordered={false}>*/}
        {/*        <Table*/}
        {/*          dataSource={dataSource3}*/}
        {/*          columns={columns3}*/}
        {/*          size="middle"*/}
        {/*        />*/}
        {/*      </Card>*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </div>
    )
  }
}

export default Tables
