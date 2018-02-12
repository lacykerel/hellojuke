import React, { Component } from 'react';
import spotify from '../spotify.svg';


class Login extends Component {
  render() {
    return (
      <div className="login">
        <a href="/login" dangerouslySetInnerHTML={{__html: spotify}}></a>
      </div>
    )
  }
}

export default Login;
