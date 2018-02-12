import React, { Component } from 'react';
import axios from 'axios';
import Jukelist from '../components/Jukelist';
import { getResults, setTokens } from '../actions/index';


class JukeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      isLoggedIn: false,
      token: '',
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    //params injected via react-router, dispatch injected via connect
    const {dispatch, match} = this.props;
    const {accessToken, refreshToken} = match;
    this.setState({token: match.params.accessToken});
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    const accessToken = this.state.token;
    event.preventDefault();
    // this.props.getResults(this.state.term);
    this.performSearch(this.state.term);
    event.currentTarget.reset();
  }

  performSearch(query){
    const accessToken = this.state.token;
    axios.get(`https://api.spotify.com/v1/search?q=${query}&type=album,artist,playlist,track&limit=4`, {
      headers: { 'Authorization': `Bearer ${accessToken}`}
    }).then(response => {
      if(response.status === 200) {
        this.setState({
          items: response.data.tracks.items,
          artist: response.data.artists.items,
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



  render() {
    return (
      <div>
      <form className="jukeForm" onSubmit={this.onFormSubmit}>
        <input type="search"
          onChange={this.onInputChange}
          placeholder="Search"
          value={this.state.term}
          />
        <button className="jukeSubmit" type="submit">Submit</button>
      </form>
      <Jukelist data={this.state.items}/>
    </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getResults }, dispatch);
// }
export default JukeForm;
// export default connect(state => state)(JukeForm);
// export default connect(null, mapDispatchToProps)(JukeForm);
