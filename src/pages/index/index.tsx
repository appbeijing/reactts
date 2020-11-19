import React ,{Component} from "react";
import "./kefu.css"

function Tempalte(props:any){
  if(props['v-if']!==undefined){
    if(props['v-if']){
      return props.children;
   }
    return null;
  }else{
    return props.children;
  }
}


export default class kefu extends Component<any,any>{
  constructor(props){
    super(props)
    this.state={
      txt:'客服服务',
      list:[{show:false,label:"北京市"},{show:true,label:"广州市"},{show:true,label:"南京市"}],
    }
  }
  render(){
  return (
    <div className='page-kefu'>
      <h2>{this.state.txt}</h2>
      {
        this.state.list.map((item:any)=>{
        return <Tempalte v-if={item.show} key={item.label}><p>{item.label}</p></Tempalte>
        })
      } 
      
    </div>
    )
  }
}
