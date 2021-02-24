import React ,{Component,useState} from "react";
import MyContext from "../../context";
import {Link} from "react-router-dom"
import "./kefu.css"
function CountNum(){
    const [count, setCount] = useState(0); 
      return (
    <div>
      <Link to='/detail?id=353'>前往详情页</Link>
      <p>You clicked {count} times</p>
      <button onClick={() =>{setCount(count+1)}}>
        点击事件
      </button>
    </div>
  );
}

export default class Kefu extends Component<any,any>{
  constructor(props){
    super(props)
    
    this.state={
      txt:'客服服务',
      list:[{show:false,label:"北京市"},{show:true,label:"广州市"},{show:true,label:"南京市"}],
    }  
  }

  setContext(){
    console.log(this.context)

    // this.context.setcontext({userName:'伟大的英雄'})
  }

  render(){
    return (
        <div className='page-kefu'>
          <div onClick={()=>{this.setContext()}}>修改context</div>
          {
            this.state.list.map((item)=>{
              return (<p key={item.label}><b>{item.label}</b></p>)
            })
          }
          <CountNum />
        </div>
      
    )
  }
}
Kefu.contextType=MyContext
