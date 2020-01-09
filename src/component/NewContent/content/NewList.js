import React, { Component } from 'react';
import { Layout, Breadcrumb,Tabs} from 'antd';
import New from './New'

const { TabPane } = Tabs;


class NewList extends Component {
    constructor(props) {
      super(props);
      this.state = {
          key : [],
      };
  } 
callback(key){
  console.log(key);
  this.setState({
    key:key
    }
    )
  }
    render() { 
        return ( 
             <Layout className="layout">
             <Breadcrumb style={{ padding: '2px',background:'#' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>文章列表</Breadcrumb.Item>
      </Breadcrumb>
             <div className="card-container">
        <Tabs type="card" onChange={this.callback.bind(this)}>
          <TabPane tab="全部文章" key="1">
            <New style={{background: 'white'}} tabkey="1"/>
          </TabPane>
          <TabPane tab="已发表" key="2">
            <New style={{background: 'white'}} tabkey="2"/>
          </TabPane>
          <TabPane tab="草稿箱" key="3">
            <New style={{background: 'white'}} tabkey="3"/>
          </TabPane>
          <TabPane tab="回收站" key="4">
            <New style={{background: 'white'}} tabkey="4"/>
          </TabPane>
          <TabPane tab="博客配置" key="5">
            敬请期待
          </TabPane>
        </Tabs>
      </div>
     </Layout>
         );
    }
}
 
export default NewList;