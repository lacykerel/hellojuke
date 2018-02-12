import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import JukeForm from './containers/Jukeform';
import Login from './components/Login';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     routing: routerReducer
//   })
// )
ReactDOM.render(

  <main>
    <div className="App-header">
      <h2>Hello Jukebox</h2>
    </div>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <HashRouter>
        <div>
          <Switch>
            <Route path="/search/:accessToken/:refreshToken" component={JukeForm} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  </main>

, document.querySelector('.App'));
