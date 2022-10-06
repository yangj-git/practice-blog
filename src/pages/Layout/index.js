import { Layout, Menu, Popconfirm, Breadcrumb } from 'antd'
import { Outlet, Link } from 'react-router-dom'
import { HomeOutlined, DiffOutlined, EditOutlined, LogoutOutlined } from '@ant-design/icons'
import './index.scss'

const { Header, Content, Sider } = Layout

function AdminLayout() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">用户名</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
          >
            <Menu.Item icon={<HomeOutlined />} key="1">
              <Link to={'/'}>数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="2">
            <Link to={'/article'}>内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="3">
            <Link to={'/publish'}>发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
          className="layout-content"
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 320,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AdminLayout