import React from "react"

function loginFn(){
  window.localStorage.setItem("auth",'ture');
  document.location.href="./";
}
const login=()=>{
  return(
    <div>
      <p>账号：<input type="text"/></p>
      <p>密码：<input type="password"/></p>
      <p><button onClick={loginFn}>登录</button></p>
    </div>
  )
}

export default login;