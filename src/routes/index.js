import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import configureStore from "../stores/";
import { Provider, connect } from 'react-redux';
import Layout from '../components/layout';
import HomePage from './home/'
import LoginPage from './login/'
import RegPage from './reg/'
import BoardPage from './board/'
import BlogPage from './blog/'
import RoadmapPage from './roadmap/'
import MinerPage from './miner/'
import ContactPage from './contact/'
import JoinusPage from './joinus/'
import FAQPage from './FAQ/'
import NoMatchPage from './no_match/'
import FeedbackPage from './feedback/'
import BusinessPage from './business/'
import TaosPage from './taos/'
import TaoPage from './taos/tao'

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
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/board" component={BoardPage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/reg" component={RegPage}/>
      <Route exact path="/blog" component={BlogPage}/>
      <Route exact path="/roadmap" component={RoadmapPage}/>
      <Route exact path="/miner" component={MinerPage}/>
      <Route exact path="/contact" component={ContactPage}/>
      <Route exact path="/joinus" component={JoinusPage}/>
      <Route exact path="/FAQ" component={FAQPage}/>
      <Route exact path="/feedback" component={FeedbackPage}/>
      <Route exact path="/business" component={BusinessPage}/>
      <Route exact path="/taos" component={TaosPage}/>
      <Route exact path="/taos/:taoname" component={TaoPage}/>
      <Route  path="/topics" component={Topics}/>
      <Route component={NoMatchPage}/>
    </Switch>
    </Layout>
  </Router>
  </Provider>
)

export default Routes
