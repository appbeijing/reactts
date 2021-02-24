import React  from 'react'
import MyContext from '../../context';


const Content=(props)=>{
  const value=React.useContext(MyContext);
  console.log(value)
  return <div>content{value.a}</div>
}
export default Content;