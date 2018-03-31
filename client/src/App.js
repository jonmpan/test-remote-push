import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import ClickerGame from "./pages/ClickerGame";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SocialLogin from "./pages/SocialLogin";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// <Navbar />
// import isLoggedIn from "./utils/isLoggedIn";

// <Route exact path="/" component={ isLoggedIn(this.props.history,'/ClickerGame') } />
// <Route exact path="/" component={ClickerGame} />
// <Route exact path="/lunatic" render={()=><ClickerGame lunatic={true}/>}/>
// <Route exact path="/" component={this.state.loggedIn ? ClickerGame : Login} />
// <Route exact path="/ClickerGame" component={this.state.loggedIn ? ClickerGame : Login} />
// const App = () => (

class App extends Component {

  // state = {
  //   loggedIn:false,
  //   username:"",
  // }

  // componentWillMount(){
  //   console.log("componentWillMount");
  //   isLoggedIn((res)=>{
  //     this.setState({loggedIn:true,username:res.data.user.username},()=>{
  //     console.log('logged in '+this.state.loggedIn);
  //     console.log('logged in as '+this.state.username);
  //     });
  //   })
  // }

  // handler = ()=>{
  //   console.log('handling');
  //   this.setState({loggedIn:true},
  //     ()=>{this.props.history.push('/');});
  // }

  render(){
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sociallogin" component={SocialLogin} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
