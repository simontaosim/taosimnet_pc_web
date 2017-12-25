import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import configureStore from "../stores/";
import { Provider, connect } from 'react-redux';
import Layout from '../components/layout';
import HomePage from './home/'

import createHistory from 'history/createHashHistory';
const history = createHistory();
const store = configureStore();



const Home = (props) => (
  <HomePage history={history} />
)

const About = () => (
  <div>
  <br/>
    <br/>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Routes = () => (
  <Provider store={store}>
  <Router>
    <Layout history={history}>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </Layout>
  </Router>
  </Provider>
)

export default Routes
