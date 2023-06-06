import React from 'react'
import { Row, Col, Card } from 'antd'
import D3SimpleBarChart from '../components/charts/D3SimpleBarChart'

class SimpleBarChart extends React.Component {
  render() {
    const data = [
      { letter: 'Company ', frequency: 8639 },
      { letter: 'Beneficial Owner', frequency: 11949 },
      { letter: 'Company Contacts', frequency: 7034 },
      { letter: 'link=Beneficial Owner', frequency: 16794 },
      { letter: 'link=Company Contacts', frequency: 7244 },
    ]
    return (
      <div className="gutter-example simple-bar-chart-demo">
        <Row gutter={10}>
          <Col className="gutter-row" md={24}>
            <div className="gutter-box">
              <Card title="知识图谱中点边数量统计情况" bordered={false}>
                <D3SimpleBarChart data={data} />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SimpleBarChart
