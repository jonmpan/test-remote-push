import React, { Component } from "react";
import Navbar from "../../components/Navbar";
// import API from "../../utils/API";

class Logout extends Component {
  state = {
    username: "",
    password: ""
  };

  componentWillMount() {
    localStorage.clear()
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>Logout</p>
        <div>
          You've been logged out.
        </div>
      </div>
    );
  }
}

export default Logout;
