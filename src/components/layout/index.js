import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { appInfo } from '../../map_props';
import 'semantic-ui-css/semantic.css';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import HomeBanner from '../home/banner';
import Footer from './footer';


class Layout extends Component {
  state = {}



render() {
  const { visible } = this.state;

  return (
    <div>

      <HomeBanner history={this.props.history}/>

      {this.props.children}
      <Footer  history={this.props.history} />
    </div>
  )
  }
}

export default Layout;
