import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import NewContent from './component/NewContent'
import AppHeader from './component/AppHeader'
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import './style.css'

const { Header, Content, Footer} = Layout;
class App extends Component {
constructor(props){
        super(props);
        this.state = {
            inpValu:''
        }
    }
  render() {
    return (
        <BrowserRouter>
  <Layout>
    <Header className="header">
     <AppHeader />
    </Header>
    <Content style={{ padding: '0 50px' }} className="content">
    {/* 列表导航 */}
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
    <NewContent />
    </Content>
    <Footer style={{ textAlign: 'center' }}> ©2018 Created by VBo</Footer>
  </Layout>
  </ BrowserRouter>
    );
  }
}


ReactDOM.render(<App  />, document.getElementById('root'))

