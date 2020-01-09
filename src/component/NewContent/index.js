import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import NewList from './content/NewList'
import 'antd/dist/antd.css';
import {Switch, Route ,Link} from 'react-router-dom'
import NewText from './list/newText'

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
class NewContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                  <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="laptop" />
                  文章管理
                </span>
              }
            >
              <Menu.Item key="1"><Link to={'/'}>文章列表</Link></Menu.Item>
              <Menu.Item key="2"><Link to={'/newText'}>发布文章</Link></Menu.Item>
            
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  用户管理
                </span>
              }
            >
              <Menu.Item key="5">评论管理</Menu.Item>
              <Menu.Item key="6">用户文章</Menu.Item>
              <Menu.Item key="7">loading</Menu.Item>
              <Menu.Item key="8">loading</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  栏目管理
                </span>
              }
            >
              <Menu.Item key="9">1</Menu.Item>
              <Menu.Item key="10">2</Menu.Item>
              <Menu.Item key="11">3</Menu.Item>
              <Menu.Item key="12">4</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
         <Switch>	
              <Route path='/newText' component={NewText} />
              <Route exact  path='/' component={NewList} />
		      	</Switch>   
    </Content>
      </Layout>
         );
    }
}
 
export default NewContent;