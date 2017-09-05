import React, { Component } from 'react';
import spotify from '../spotify.svg';


class Login extends Component {
  render() {
    return (
      <div className="login">
        <a href="/login"><img alt="" src={spotify}/></a>
      </div>
    )
  }
}

export default Login;
