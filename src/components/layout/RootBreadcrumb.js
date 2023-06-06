import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const RootBreadcrumb = ({ match }) => {
  const urlArr = match.url.split('/')
  const len = urlArr.length
  let temArr = ['']
  const home = '首页'
  const names = {
    tables: '成员信息',
    'asyc-tables': '其他可视化项目',
    profile: '你干嘛',
    'simple-bar-chart': '知识图谱业务群体类型统计情况',
    'graph-visualization': '业务群体情况展示',
    'degree': '度的分布异常情况',
    'service': 'Service和Revenue异常',
    'country': 'Country异常',
    'simple-area-chart': 'D3 简单面积图',
    'simple-pie-chart': '各标签播放量以及人数分布',
    'simple-points-chart': '部分UP主粉丝数量与视频播放量',
    'grouped-bar-chart': 'D3 组合柱状图',
    'stacked-bar-chart': 'D3 堆栈柱状图',
    'radial-stacked-bar-chart': 'D3 径向堆栈柱状图',
    'simple-line-chart': 'D3 简单线状图',
    'simple-line-chartii': 'D3 简单线状图II',
    'simple-chord-chart': 'D3 简单弦图',
    'simple-dendrogram-chart': 'D3 简单树状图',
    'simple-pack-chart': 'D3 简单打包图',
    'radar-line-chart': '部分社区UP主信息统计',
    'simple-china-map-chart': 'D3 简单中国地图',
    'simple-force-chart': '用户标签展示',
    'simple-force-chart2': '社区划分展示',
    'simple-tag-cloud-chart': 'B站视频内容云图',
    'vertical-bp-chart': '企业分组竖向图',
    'simple-math-chart': '常用函数图像',
    'exponential-spiral-line': '指数函数图像-极坐标',
    'logarithmic-spiral-line': '对数函数图像-极坐标',
    'archimedean-spiral-line': '阿基米德螺线',
    'equiangular-spiral-line': '等角螺线',
    'simple-voronoi-chart': '轻松一刻'
  }
  return (
    <Breadcrumb style={{ margin: '12px 0' }}>
      {urlArr[0] === urlArr[1] && <Breadcrumb.Item>{home}</Breadcrumb.Item>}
      {urlArr[0] !== urlArr[1] &&
        urlArr.map((item, index) => {
          let key = item !== '' ? item : 'home'
          if (item !== '') {
            temArr.push(item)
          }
          if (index !== len - 1) {
            return (
              <Breadcrumb.Item key={key}>
                <Link to={temArr.join('/')}>
                  {item !== '' ? names[item] : home}
                </Link>
              </Breadcrumb.Item>
            )
          } else {
            return (
              <Breadcrumb.Item key={key}>
                {names[item] ? names[item] : item}
              </Breadcrumb.Item>
            )
          }
        })}
    </Breadcrumb>
  )
}

RootBreadcrumb.propTypes = {
  match: PropTypes.object
}

export default RootBreadcrumb
