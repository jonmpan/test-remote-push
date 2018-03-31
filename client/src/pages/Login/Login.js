import React, { Component } from "react";
import API from "../../utils/API";
// import Navbar from "../../components/Navbar";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
  }

  handleInputChange = event => {
    // console.log('derp');
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    API.authenticateUser(this.state).then(res=>{
      console.log(res);
      localStorage.setItem('jwt',res.data.token);
      this.updateLoggedIn();
      // this.props.handler();
      // this.props.history.push('/');
    }).catch(err => console.log(err));
  };
// this.props.updateLoggedIn

  updateLoggedIn = ()=>{
    this.props.updateLoggedIn();
  }

  render() {
    return (
      <div>
        <div className="container">
        <p className="max-center">Login</p>
        <form>
          <div>
            <input 
              name="username"
              onChange={this.handleInputChange}
              value={this.state.username}
              placeholder="username"
            />
          </div>
          <div>
            <input 
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
              placeholder="password"
              type="password"
            />
          </div>
          <button onClick={this.handleFormSubmit}>Login</button>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
