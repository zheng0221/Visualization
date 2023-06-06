import React from 'react'
import { Row, Col, Card } from 'antd'
import D3VerticalBPChart from '../components/charts/D3VerticalBPChart'

class VerticalBPChart extends React.Component {
  render() {
    const data = [
      ['Fish', 'e2-e4', 71,125],
      ['Fish', 'e4-e6', 432,431],
      ['Fish', 'e6-e8', 11,40],
      ['Fish', 'e8-e10', 14,1],
      ['Squid', 'e2-e4', 1,2],
      ['Squid', 'e4-e6', 9,9],
      ['Squid', 'e6-e8', 0,0],
      ['Squid', 'e8-e10', 0,0],
      ['Others', 'e2-e4', 261,493],
      ['Others', 'e4-e6', 2172,2457],
      ['Others', 'e6-e8', 150,147],
      ['Others', 'e8-e10', 13,1],
      ['Unknown', 'e2-e4', 1618,2572],
      ['Unknown', 'e4-e6', 882,1856],
      ['Unknown', 'e6-e8', 2,1],
      ['Unknown', 'e8-e10', 1,0],
    ]

    return (
      <div className="gutter-example virtical-bp-chart-demo">
        <Row gutter={10}>
          <Col className="gutter-row" md={24}>
            <div className="gutter-box">
              <Card title="相似企业分组结果" bordered={false}>
                <D3VerticalBPChart data={data} />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default VerticalBPChart
