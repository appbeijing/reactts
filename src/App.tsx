import React from "react"
import 'antd/dist/antd.css';
import { BrowserRouter as Router,Switch} from "react-router-dom"
import RouterGuide from "./router"
import MyContext from "./context"
class App extends React.Component<any,any> {
  constructor(props){
    super(props)
    this.state={
      context:{
        userName:'王志伟'
      }
    };
  }

  setContext(context){
    this.setState({
      context
    })
  }

  render(){
    return(
      <MyContext.Provider value={this.state.context}>
        <Router>
          <Switch>
            <RouterGuide />
          </Switch>
        </Router>
      </MyContext.Provider>
    )
  }
}
export default App;