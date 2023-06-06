import React from 'react'
import {Row, Col, Card} from 'antd'
import D3SimpleTagCloudChart from '../components/charts/D3SimpleTagCloudChart'

class SimpleTagCloudChart extends React.Component {
    render() {
        const data = [
            {name: '游戏', value: 10, href: 'https://www.bilibili.com'},
            {name: '视频', value: 9, href: 'https://www.bilibili.com'},
            {name: '教程', value: 8, href: 'https://www.bilibili.com'},
            {name: '世界', value: 7, href: 'https://www.bilibili.com'},
            {name: '原创', value: 6, href: 'https://www.bilibili.com'},
            {name: '体验', value: 6, href: 'https://www.bilibili.com'},
            {name: '动画', value: 5, href: 'https://www.bilibili.com'},
            {name: '大家', value: 4, href: 'https://www.bilibili.com'},
            {name: '教学', value: 4, href: 'https://www.bilibili.com'},
            {name: '原神', value: 3, href: 'https://www.bilibili.com'},
            {name: '电影', value: 3, href: 'https://www.bilibili.com'},
            {name: '开箱', value: 3, href: 'https://www.bilibili.com'},
            {name: '绘画', value: 3, href: 'https://www.bilibili.com'},
            {name: '音乐', value: 3, href: 'https://www.bilibili.com'},
            {name: '故事', value: 3, href: 'https://www.bilibili.com'},
            {name: '老师', value: 3, href: 'https://www.bilibili.com'},
            {name: '技巧', value: 2, href: 'https://www.bilibili.com'},
            {name: '过程', value: 2, href: 'https://www.bilibili.com'},
            {name: '经典', value: 2, href: 'https://www.bilibili.com'},
            {name: '官方', value: 2, href: 'https://www.bilibili.com'},
            {name: '问题', value: 2, href: 'https://www.bilibili.com'},
            {name: '小时', value: 2, href: 'https://www.bilibili.com'},
            {name: '粉丝', value: 2, href: 'https://www.bilibili.com'},
            {name: '手机', value: 2, href: 'https://www.bilibili.com'},
        ]

        return (
            <div className="gutter-example simple-tag-cloud-chart-demo">
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="B站视频内容云图" bordered={false}>
                                <D3SimpleTagCloudChart data={data}/>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SimpleTagCloudChart
