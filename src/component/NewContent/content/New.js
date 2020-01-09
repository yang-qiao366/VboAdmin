import React, { Component } from 'react';
import { Table,message } from 'antd';
import NewButton from './NewButton'
import getajax from '../../api/uapi';
//使用组件newbutton,
const columns = [
  { title: '标题', dataIndex: 'title', key: 'title', width:'500px',cursor:'pointer'},
  { title: '最近编辑时间', dataIndex: 'update_time_formatted', key: 'update_time_formatted' },
  { title: '所属分类', dataIndex: 'category', key: 'category' },
  {
    title: '操作',
    render: text=> <div><span className='none'><NewButton value="删除" type="danger" 
    yes={()=>getajax('http://149.28.94.205:3000/mock/23/user/article/delete',{params:{article_id:text.article_id}}).then(message.success('删除成功'))
    } 
    no={()=>message.success('取消删除')}></NewButton></span><span >
    <NewButton className="none" value="删除" type="danger" 
    yes={()=>getajax('http://149.28.94.205:3000/mock/23/user/article/delete',{params:{article_id:text.article_id}}).then(message.success('删除成功'))
    } 
    no={()=>message.success('取消删除')}></NewButton></span></div>
  },
];



class New extends Component {
    
      constructor(props) {
      super(props);
      this.state = {
          list : [],
      };
  } 
  //钩子请求
    componentDidMount(){
         const {tabkey} =this.props;
         console.log(tabkey)
        //  const yang = '2'
        //  console.log(yang)
         if(tabkey!=='1'){}else{columns.splice(3,1,{});}
       getajax('http://149.28.94.205:3000/mock/23/user/article/list')
       .then((res)=>{
           this.setState({
		 			list: res.data.data
		 		},()=>{
           
  // const yang= '1'
  //   if(false){}else
  //      {columns.splice(3,1,{});}
                 }
                 
                 )
           })
       .catch((err)=>{console.log(err)})
    }
   newDele(){
   // console.Log(text.article_id)
   console.log(this.props.new)
};
//新钩子
// componentWillReceiveProps (){
//   console.log(this.props.new)
//   if(this.props.new!==1){}else
//       {columns.splice(3,1,{});}
// }
// static getDerivedStateFromProps(nextProps, prevState){
//   console.log(nextProps.new)
//   const {type} = nextProps;
//     // 当传入的type发生变化的时候，更新state
//     if (type !== prevState.type) {
//         return {
//             type,
//         };
//     };
   
//     return null;
// }
    render() { 
        return (   <Table
    rowKey={record => record.article_id} 
    columns={columns}
    dataSource={this.state.list}
  /> );
    }
}
 
export default New;