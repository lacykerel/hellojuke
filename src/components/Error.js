import React, { Component } from 'react';

class Error extends Component {
  render() {
    const { errorMsg } = this.props.params;
    return(
      <div className="error">
        <h2> An Error occured</h2>
        <p>{errorMsg}</p>
      </div>
    );
  }
}


export default Error;
