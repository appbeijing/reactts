import React ,{Component} from "react";
import {NavLink} from "react-router-dom"
import MyContext from "../../context";
import "./kefu.css"
import { Rate } from 'antd';
import { Button } from 'antd';
import { Alert } from 'antd';
export default class Home extends Component<any,any>{

  constructor(props){
    super(props)
    this.state={
      txt:'首页',
    }
  }
  JumpTo(){
    this.props.history.push({
      pathname: '/kefu',
      search:"id=33"
    })
  }

  rateChange(val:any){
    console.log(val)
  }

  render(){
    return (
      <div className='page-kefu'>
        <Alert type='warning' message="" description={'未选择'} />
        <Button type="primary">Primary Button</Button>
        <Rate onHoverChange={this.rateChange} onChange={this.rateChange.bind(this)}></Rate>
        <NavLink to='/login'>测试登录</NavLink>
        <br />
        <b onClick={this.JumpTo.bind(this)}>客服</b>
        <h2>{this.state.txt}</h2>
      </div>
      )
  }
}
Home.contextType=MyContext
