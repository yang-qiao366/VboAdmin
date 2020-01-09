//带警示框按钮<NewButton value="按钮内同" type="按钮样式" 
 //   yes={()=>确定执行} 
  //  no={取消执行}/>,
 // },
import React, { Component } from 'react';
import { Popconfirm ,Button} from 'antd';

class NewButton extends Component {
    constructor(props) {
        super(props);
       this.state={

       }
    }
  confirm(e) {
     this.props.yes(e)
}
 cancel(e) {
//   console.log(e);
//   message.error('Click on No');
 // this.props.no
 this.props.no(e)
}
    render() { 
        return ( <Popconfirm
    title="确定操作？"
    onConfirm={this.confirm.bind(this)}
    onCancel={this.cancel.bind(this)}
    okText="是"
    cancelText="否"
  >
    <Button type={this.props.type}>{this.props.value}</Button>
  </Popconfirm> );
    }
}

export default NewButton;