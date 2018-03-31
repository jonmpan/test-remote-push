import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "../NoMatch";
import ClickerGame from "../ClickerGame";
import Register from "../Register";
import Login from "../Login";
import Logout from "../Logout";
import SocialLogin from "../SocialLogin";
import Navbar from "../../components/Navbar";
// import Navbar from "./components/Navbar";
// <Navbar />
import isLoggedIn from "../../utils/isLoggedIn";

class Home extends Component {

  state = {
    loggedIn:false,
    loginPage:false,
    logoutPage:false,
    registerPage:false,
    clickerGamePage:false,
    username:"",
  }

  resetPageStates = (cb)=>{
    this.setState({loggedIn:false,loginPage:false,logoutPage:false,registerPage:false,clickerGamePage:false});
  }

  updateLoggedIn = ()=>{
    this.resetPageStates();
    this.setState({loggedIn:true,clickerGamePage:true});
  }

  updateRegistered = ()=>{
    this.resetPageStates();
    this.setState({loginPage:true}); 
  }

  logOut = ()=>{
    this.resetPageStates();
    this.setState({loggedIn:false,loginPage:true});
    console.log('this.state.logout '+this.state.logOut);
    localStorage.clear()
    console.log('localStorage jwt '+localStorage.jwt);
  }

  loginPageLoad = ()=>{
    this.resetPageStates();
    this.setState({loginPage:true});
    console.log('LogIn clicked');
  }

  registerPageLoad = ()=>{
    this.resetPageStates();
    this.setState({registerPage:true});
    console.log('register page clicked');
  }

  componentWillMount(){
    console.log("componentWillMount Home");
    isLoggedIn((res)=>{
      this.setState({loggedIn:true,username:res.data.user.username,clickerGamePage:true},()=>{
      console.log('logged in '+this.state.loggedIn);
      console.log('logged in as '+this.state.username);
      }).catch(err=>{console.log(this.state.loggedIn);});
    },()=>{
      this.setState({loggedIn:false,loginPage:true},function(){console.log(this.state);})
    })
  }

  render(){
    return(
      <div>
        <Navbar loggedIn={this.state.loggedIn} logOut={this.logOut} loginPageLoad={this.loginPageLoad} registerPageLoad={this.registerPageLoad} />
        {this.state.loggedIn && this.state.clickerGamePage ? <ClickerGame /> : ""}
        {!this.state.loggedIn && this.state.loginPage ? <Login updateLoggedIn={this.updateLoggedIn} /> : ""}
        {!this.state.loggedIn && this.state.registerPage ? <Register updateRegistered={this.updateRegistered} /> :""}
      </div>
    )
  }
};

export default Home;
