//路由守卫
import React from "react"
import { Route,Redirect} from "react-router-dom"
import data from "./router-data"
import MyContext from "../context"
function RouterGuide(props:any){
  const auth:string|null=window.localStorage.getItem("auth");
  // let {pathname} =props.location.pathname;
  //为了避免用js写跳转的时候，直接把search写在url上导致无法匹配到路由
  const pathname=props.location.pathname.split("?")[0];
  // console.log(pathname)
  const tmp:any=data.find((item)=>{return item.pathname===pathname});
  if(tmp){
    //需要权限控制的
    if(tmp['auth']){
      if(auth){
        return <MyContext.Consumer>
          {
            ()=>{
              return (<Route path={pathname} component={tmp['component']} exact={tmp['exact']} />)
            }
          }
        </MyContext.Consumer>
      }else{
        return (<Redirect to="/login"></Redirect>)
      }
    }else{//不需要权限控制的
      //已经登录的。
      if(auth){
        //
        if(pathname==="/login"){
          return (<Redirect to="/"></Redirect>)
        }else{
          //没有登录的
          
        }
      }
       
    }
  }else{
    return (<Redirect to="/404" />)
  }
  // 此处不return的话。检测的时候会无法通过，导致编译失败，
  // 我觉的这个是娄底的，意思就是给react看，瞧，不管怎么样，我都返回了jsx，别给我报错，其实报错也拦不住
  return (<Route path={pathname} component={tmp['component']} exact={tmp['exact']} />)
}

export default RouterGuide;
