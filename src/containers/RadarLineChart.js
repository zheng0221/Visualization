import React from 'react'
import {Row, Col, Card} from 'antd'
import D3RadarLineChart from '../components/charts/D3RadarLineChart'

class RadarLineChart extends React.Component {
    render() {
        const data = [
            {
                className: '教育',
                chinese: 44,
                math: 37,
                physics: 40,
                chemistry: 42,
                english: 38
            },
            {
                className: '家居',
                chinese: 52,
                math: 17,
                physics: 33,
                chemistry: 41,
                english: 29
            },
            {
                className: '科技',
                chinese: 45,
                math: 37,
                physics: 37,
                chemistry: 47,
                english: 57
            },
            {
                className: '时政',
                chinese: 22,
                math: 100,
                physics: 59,
                chemistry: 100,
                english: 100
            },
            {
                className: '彩票',
                chinese: 100,
                math: 2,
                physics: 21,
                chemistry: 1,
                english: 4
            },
            {
                className: '娱乐',
                chinese: 50,
                math: 42,
                physics: 40,
                chemistry: 50,
                english: 56
            },
            {
                className: '社会',
                chinese: 20,
                math: 75,
                physics: 100,
                chemistry: 56,
                english: 52
            },
            {
                className: '游戏',
                chinese: 76,
                math: 38,
                physics: 41,
                chemistry: 47,
                english: 49
            },
            {
                className: '体育',
                chinese: 37,
                math: 15,
                physics: 72,
                chemistry: 23,
                english: 24
            },
            {
                className: '股票',
                chinese: 30,
                math: 29,
                physics: 77,
                chemistry: 41,
                english: 37
            },
            {
                className: '时尚',
                chinese: 43,
                math: 41,
                physics: 63,
                chemistry: 51,
                english: 42
            },
            {
                className: '房产',
                chinese: 48,
                math: 22,
                physics: 50,
                chemistry: 27,
                english: 34
            },
            {
                className: '星座',
                chinese: 61,
                math: 35,
                physics: 19,
                chemistry: 31,
                english: 35
            },
            {
                className: '财经',
                chinese: 37,
                math: 33,
                physics: 33,
                chemistry: 49,
                english: 36
            },
        ]

        return (
            <div className="gutter-example radar-chart-demo">
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="部分社区UP主信息统计" bordered={false}>
                                <D3RadarLineChart data={data}/>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default RadarLineChart
