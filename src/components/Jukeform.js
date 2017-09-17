import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Jukelist from './Jukelist';
import {
  getMyInfo,
  setTokens,
}   from '../actions/actions';

class JukeForm extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      loading: true,
      isLoggedIn: false,
      token: '',
      searchText: ''
    };
  }

  componentDidMount() {
    //params injected via react-router, dispatch injected via connect
    const {dispatch, match} = this.props;
    const {accessToken, refreshToken} = match;
    this.setState({token: match.params.accessToken});
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  performSearch = (query) => {
    const accessToken = this.state.token;
    axios.get(`https://api.spotify.com/v1/search?q=${query}&type=album,artist,playlist,track`, {
      headers: { 'Authorization': `Bearer ${accessToken}`}
    }).then(response => {
      if(response.status === 200) {
        this.setState({
          items: response.data.artists.items,
          loading: false,
          isLoggedIn: true
        });
      }
    }).catch(error => {
      console.log(error.response, 'error');
      if(error.response.status === 401) {
        this.setState({
          isLoggedIn: false
        });
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.performSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {

    return (
      <div>
      <form className="jukeForm" onSubmit={this.handleSubmit}>
        <input type="search"
          onChange={this.onSearchChange}
          name="search"
          placeholder="Search"
          value={this.state.value}
          ref={(input) => this.query = input}
          />
        <button className="jukeSubmit" type="submit">Submit</button>
      </form>
      <Jukelist data={this.state.items}/>
    </div>
    );
  }
}

export default connect(state => state)(JukeForm);
