import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Badge } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

const SiderMenus = ({ match }) => (
  <div style={{ paddingBottom: '120px' }}>
    <Menu
      theme="dark"
      defaultSelectedKeys={[match.url]}
      selectedKeys={[match.url]}
      defaultOpenKeys={['sub4']}
      mode="inline"
    >
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home" />
          <span>首页</span>
        </Link>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="switcher" />
            <span>项目信息</span>
          </span>
        }
      >
        <Menu.Item key="/tables">
          <Link to="/tables">项目成员介绍</Link>
        </Menu.Item>
        <Menu.Item key="/asyc-tables">
          <Link to="/asyc-tables">其他有意思的项目</Link>
        </Menu.Item>
      </SubMenu>
      {/*</SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="user" />
            <span>不要点</span>
          </span>
        }
      >
        <Menu.Item key="/profile">
          <Link to="/profile">你干嘛</Link>
        </Menu.Item>
      </SubMenu>*/}
      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="dot-chart" />
            <span>数学图形</span>
          </span>
        }
      >
        <Menu.Item key="/simple-math-chart">
          <Link to="/simple-math-chart">常用函数图像</Link>
        </Menu.Item>
        <Menu.Item key="/archimedean-spiral-line">
          <Link to="/archimedean-spiral-line">阿基米德螺线</Link>
        </Menu.Item>
        <Menu.Item key="/equiangular-spiral-line">
          <Link to="/equiangular-spiral-line">等角螺线</Link>
        </Menu.Item>
        <Menu.Item key="/exponential-spiral-line">
          <Link to="/exponential-spiral-line">指数函数图像-极坐标</Link>
        </Menu.Item>
        <Menu.Item key="/logarithmic-spiral-line">
          <Link to="/logarithmic-spiral-line">对数函数图像-极坐标</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub4"
        title={
          <span>
            <Icon type="area-chart" />
            <span>可视化视图展示</span>
          </span>
        }
      >
        <Menu.Item key="/simple-bar-chart">
          <Link to="/simple-bar-chart">业务群体类型统计情况</Link>
        </Menu.Item>
        <Menu.Item key="/graph-visualization">
          <Link to="/graph-visualization">业务群体情况</Link>
        </Menu.Item>
        <Menu.Item key="/degree">
          <Link to="/degree">度的分布异常</Link>
        </Menu.Item>
        <Menu.Item key="/service">
          <Link to="/service">Service和Revenue异常</Link>
        </Menu.Item>
        <Menu.Item key="/country">
          <Link to="/country">Country异常</Link>
        </Menu.Item>
        {/*
        <Menu.Item key="/simple-area-chart">
          <Link to="/simple-area-chart">D3 简单面积图</Link>
        </Menu.Item>
        <Menu.Item key="/simple-pie-chart">
          <Link to="/simple-pie-chart">各标签播放量以及人数分布</Link>
        </Menu.Item>
        <Menu.Item key="/simple-line-chart">
          <Link to="/simple-line-chart">D3 简单线状图</Link>
        </Menu.Item>
        <Menu.Item key="/simple-line-chartii">
          <Link to="/simple-line-chartii">D3 简单线状图II</Link>
        </Menu.Item>
        {/*<Menu.Item key="/simple-points-chart">
          <Link to="/simple-points-chart">部分UP主粉丝数量与视频播放量</Link>
    </Menu.Item>
        <Menu.Item key="/grouped-bar-chart">
          <Link to="/grouped-bar-chart">D3 组合柱状图</Link>
        </Menu.Item>
        <Menu.Item key="/stacked-bar-chart">
          <Link to="/stacked-bar-chart">D3 堆栈柱状图</Link>
        </Menu.Item>
        <Menu.Item key="/radial-stacked-bar-chart">
          <Link to="/radial-stacked-bar-chart">D3 径向堆栈柱状图</Link>
        </Menu.Item>
        <Menu.Item key="/simple-chord-chart">
          <Link to="/simple-chord-chart">D3 简单弦图</Link>
        </Menu.Item>
        <Menu.Item key="/simple-dendrogram-chart">
          <Link to="/simple-dendrogram-chart">D3 简单树状图</Link>
        </Menu.Item>
        <Menu.Item key="/simple-pack-chart">
          <Link to="/simple-pack-chart">D3 简单打包图</Link>
        </Menu.Item>*/}
        {/*
        <Menu.Item key="/radar-line-chart">
          <Link to="/radar-line-chart">部分社区UP主信息统计</Link>
        </Menu.Item>
        <Menu.Item key="/simple-force-chart">
          <Link to="/simple-force-chart">用户标签展示</Link>
        </Menu.Item>
        <Menu.Item key="/simple-force-chart2">
          <Link to="/simple-force-chart2">社区划分展示</Link>
        </Menu.Item>
        <Menu.Item key="/simple-voronoi-chart">
          <Badge dot={true}>
            <Link to="/simple-voronoi-chart">轻松一刻</Link>
          </Badge>
        </Menu.Item>
        <Menu.Item key="/simple-tag-cloud-chart">
          <Link to="/simple-tag-cloud-chart">B站视频内容云图</Link>
  </Menu.Item>*/}
        <Menu.Item key="/vertical-bp-chart">
          <Link to="/vertical-bp-chart">企业分组竖向图</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  </div>
)

SiderMenus.propTypes = {
  match: PropTypes.object.isRequired
}

export default SiderMenus
