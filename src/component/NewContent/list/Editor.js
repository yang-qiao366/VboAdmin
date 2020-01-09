import React, { Component } from 'react';
import ReactUEditorComponent from 'react-ueditor-component';

class Editor extends Component {
   state = {
    value: '',
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
     onChange = (value) => this.setState(value);
    render() { 
        return ( <ReactUEditorComponent
        value={this.state.value}
        onChange={this.onChange}
        ueditorOptions={{
          serverOptions: {
            /* 上传图片配置项 */
            imageActionName: 'uploadimage', /* 执行上传图片的action名称 */
            imageFieldName: 'file', /* 提交的图片表单名称 */
            imageMaxSize: 2048000, /* 上传大小限制，单位B */
            imageAllowFiles: ['.png', '.jpg', '.jpeg', '.gif', '.bmp'], /* 上传图片格式显示 */
            imageCompressEnable: true, /* 是否压缩图片,默认是true */
            imageCompressBorder: 1600, /* 图片压缩最长边限制 */
            imageInsertAlign: 'none', /* 插入的图片浮动方式 */
            imageUrlPrefix: '', /* 图片访问路径前缀 */
            imageResponseKey: 'fileURL' //! 图片上传接口response中包含图片路径的键名
          },
          // 上传文件时的额外信息
          serverExtra: this.state.serverExtra,
          serverUrl: 'http://upload.com' // 上传文件的接口
        }}
      /> );
    }
}
 
export default Editor;