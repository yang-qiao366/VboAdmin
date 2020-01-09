import React, { Component } from 'react';
import { Button, Popconfirm, message, Input, Select } 
from 'antd';
// import Editor from 'for-editor'
import axios from 'axios';
import NewTag from './NewTag'
import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'
import 'simplemde/dist/simplemde.min.css'
//import Editor from './Editor'
const { Option } = Select;
class NewText extends Component {
        constructor(props){
        super(props);
        this.state = {
            value:'',
            title: '',
            categoty:'',
            tag: '',
            serverExtra: {
                // 上传文件额外请求头
                headers: {
                  Auth: 'token'
                },
                // 上传文件额外的数据
                extraData: {
                  desc: 'more data'
                }
    }
        }
        this.$vm = React.createRef()
    }

componentDidMount() {
        this.smde = new SimpleMDE({
            element: document.getElementById('editorId').childElementCount,
            autofocus: true,
            autosave: true,
            previewRender: function (plainText) {
                return marked(plainText, {
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value;
                    }
                });
            },
        })
    }
    // 确认发布操作警示弹出框
    confirm(e) {
    console.log(e);
    axios.get('url',{
    params:{
        category : this.state.category,
        title : this.state.title,
        content : this.state.value,
        tag : this.state.tag
    }
    }
    )
    .then(message.success('发布成功'))
    .catch(message.success('发布失败，请从新发布'))
//发布成功后的动作
    
    }
//取消操作
    cancel(e) {
    console.log(e);
    message.error('操作取消');
    }
//图片载入变量
  addImg($file) {
    this.$vm.current.$img2Url($file.name, 'file_url')
    console.log($file)
  } 
  //文章内容数据绑定
    handelChangecontent(e){
       
        this.setState({
            value:e
        })
        console.log(this.state.value)
    }
    //文章标题数据绑定
  handelChangeTitle(e){
      this.setState({
            title:e.target.value
        })
        console.log(this.state.title)
  }

  //标签子组件向父组件传值
  fn(data){
      this.setState({
          tag:data
      })
  }

  onChange = (value) => this.setState(value);

    render() { 
        return ( 
            <div>
            <div style={{margin: 8}}>
             <Select defaultValue="lucy" style={{ width: 120, margin: 2}}>
      <Option value="jack">前端</Option>
      <Option value="lucy">Java</Option>
      <Option value="disabled">
        全栈
      </Option>
      <Option value="Yiminghe">Python</Option>
    </Select>
    <Input placeholder="请输入标题" style={{width:'400px', margin: 8}} onChange={this.handelChangeTitle.bind(this)} />
    <NewTag pfn={this.fn.bind(this)}/>
    </div>
      <textarea id='editorId'/> 
         {/* <Editor 
         value={this.state.value} 
         onChange={this.handelChangecontent.bind(this)} 
         addImg={($file) => this.addImg($file)}
          ref={this.$vm}
        height='529px'
          /> */}
          <Popconfirm
    title="是否发布文章?"
    onConfirm={this.confirm.bind(this)}
    onCancel={this.cancel.bind(this)}
    okText="Yes"
    cancelText="No"
  >
  <Button type="primary" style={{float:'right' , margin:'8px 0' }}>发布文章</Button> 
  </Popconfirm>
         
          <Popconfirm
    title="是否保存到草稿箱?"
    onConfirm={this.confirm.bind(this)}
    onCancel={this.cancel.bind(this)}
    okText="Yes"
    cancelText="No"
  >
    <Button style={{ float:'right' , margin:'8px' }}>保存到草稿箱</Button> 
    </Popconfirm>
          </div>
        );
        
    };
}
 
export default NewText;