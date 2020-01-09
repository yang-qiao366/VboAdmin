import React, { Component, Fragment} from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import './style.css'

const menu = (
  <Menu>
    <Menu.Item>
      <div>
        个人中心
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        退出登陆
      </div>
    </Menu.Item>
  </Menu>
);
class AppHeader extends Component {
    state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
    render() { 
        return ( 
            <Fragment>
        <span className="logo">Vb后台管理页面</span> 
       <Dropdown overlay={menu}>
    <div className="ant-dropdown-link user">
      Hover me <Icon type="down" />
    </div>
  </Dropdown>
             </Fragment>
        );
    }
    componentDidMount() {
    
 }
}
 
export default AppHeader;