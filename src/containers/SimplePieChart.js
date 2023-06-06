import React from 'react'
import {Row, Col, Card} from 'antd'
import D3SimplePieChart from '../components/charts/D3SimplePieChart'
import D3SimpleRingChart from '../components/charts/D3SimpleRingChart'

class SimplePieChart extends React.Component {
    render() {
        const data1 = [
            {age: '教育', population: 503},
            {age: '家居', population: 231},
            {age: '科技', population: 4104},
            {age: '时政', population: 31},
            {age: '彩票', population: 4},
            {age: '娱乐', population: 627},
            {age: '社会', population: 67},
            {age: '游戏', population: 10373},
            {age: '体育', population: 177},
            {age: '股票', population: 20},
            {age: '时尚', population: 934},
            {age: '房产', population: 69},
            {age: '星座', population: 13},
            {age: '财经', population: 33},
        ]
        const data2 = [
            {age: '教育', population: 1686410075},
            {age: '家居', population: 745024898},
            {age: '科技', population: 5096154013},
            {age: '时政', population: 312409596},
            {age: '彩票', population: 889869},
            {age: '娱乐', population: 2567728489},
            {age: '社会', population: 410557321},
            {age: '游戏', population: 12942049656},
            {age: '体育', population: 385906423},
            {age: '股票', population: 63923010},
            {age: '时尚', population: 3976714469},
            {age: '房产', population: 222460844},
            {age: '星座', population: 50343132},
            {age: '财经', population: 142907701},
        ]
        return (
            <div className="gutter-example simple-pie-chart-demo">
                <Row gutter={10}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="播放量分布" bordered={false}>
                                <D3SimpleRingChart data={data1}/>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="人数分布" bordered={false}>
                                <D3SimplePieChart data={data2}/>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SimplePieChart
