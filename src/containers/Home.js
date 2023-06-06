import React from 'react'
import { Row, Col, Card, Timeline, Icon } from 'antd'
import EchartsViews from '../components/charts/EchartsViews'
import EchartsProjects from '../components/charts/EchartsProjects'

class Dashboard extends React.Component {
  render() {
    const b1 = 'http://dummyimage.com/100/FF8604/fff'
    return (
      <div className="gutter-example button-demo">
        <Row gutter={10}>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clearfix y-center">
                  <div className="pull-left mr-m">
                    <Icon type="heart" className="text-2x text-danger" />
                  </div>
                  <div className="clearfix">
                    <div className="text-muted">给我们的可视化项目点个赞吧</div>
                    <h2>6386</h2>
                  </div>
                </div>
              </Card>
            </div>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clearfix y-center">
                  <div className="pull-left mr-m">
                    <Icon type="cloud" className="text-2x" />
                  </div>
                  <div className="clearfix">
                    <div className="text-muted">我们传到了gitee</div>
                    <h2>31</h2>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clearfix y-center">
                  <div className="pull-left mr-m">
                    <Icon type="camera" className="text-2x text-info" />
                  </div>
                  <div className="clearfix">
                    <div className="text-muted">我们做了不少照片</div>
                    <h2>13</h2>
                  </div>
                </div>
              </Card>
            </div>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clearfix y-center">
                  <div className="pull-left mr-m">
                    <Icon type="mail" className="text-2x text-success" />
                  </div>
                  <div className="clearfix">
                    <div className="text-muted">发邮件给我们~</div>
                    <h2>1</h2>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={16}>
            <div className="gutter-box">
              <Card bordered={false} className={'no-padding'}>
                {<EchartsProjects />}
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="pb-m">
                  <h3>任务</h3>
                  <small>项目已经完成，报告完成，项目展示正在进行中</small>
                </div>
                <a className="card-tool">
                  <Icon type="sync" />
                </a>
                <Timeline>
                  <Timeline.Item color="green">可视化任务分析与数据处理</Timeline.Item>
                  <Timeline.Item color="green">可视化编码调试与文档撰写</Timeline.Item>
                  <Timeline.Item color="red">
                    <p>项目展示</p>
                  </Timeline.Item>

                  <Timeline.Item color="#108ee9">
                    <p>报告提交</p>
                  </Timeline.Item>
                </Timeline>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="pb-m">
                  <h3>项目成员擅长项</h3>
                </div>
                <a className="card-tool">
                  <Icon type="sync" />
                </a>
                <ul className="list-group no-border">
                  <li className="list-group-item">
                    <a href="" className="pull-left w-40 mr-m">
                      <img
                        src={b1}
                        className="img-responsive img-circle"
                        alt="test"
                      />
                    </a>
                    <div className="clearfix">
                      <a href="" className="block">
                        郑锦龙
                      </a>
                      <span className="text-muted">擅长唱</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <a href="" className="pull-left w-40 mr-m">
                      <img
                        src={b1}
                        className="img-responsive img-circle"
                        alt="test"
                      />
                    </a>
                    <div className="clearfix">
                      <a href="" className="block">
                        顾永翀
                      </a>
                      <span className="text-muted">擅长跳</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <a href="" className="pull-left w-40 mr-m">
                      <img
                        src={b1}
                        className="img-responsive img-circle"
                        alt="test"
                      />
                    </a>
                    <div className="clearfix">
                      <a href="" className="block">
                        杨文杰
                      </a>
                      <span className="text-muted">擅长rap</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <a href="" className="pull-left w-40 mr-m">
                      <img
                        src={b1}
                        className="img-responsive img-circle"
                        alt="test"
                      />
                    </a>
                    <div className="clearfix">
                      <a href="" className="block">
                        蔡徐坤
                      </a>
                      <span className="text-muted">
                        擅长篮球
                      </span>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="pb-m">
                  <h3>访问量统计 by Echarts</h3>
                  <small>最近7天用户访问量</small>
                </div>
                <a className="card-tool">
                  <Icon type="sync" />
                </a>
                {<EchartsViews />}
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard
