import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import JukeForm from './Jukeform';
import Login from './Login';
import reducers from '../reducers';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const Main = () => (
  <main>
    <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/search/:accessToken/:refreshToken" component={JukeForm} />
    </Switch>
  </Provider>
  </main>
)


export default Main;
