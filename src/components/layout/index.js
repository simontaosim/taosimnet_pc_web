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
import MerkleTree from '../../core/MerkleTree.js';

let tree = new MerkleTree();
console.log(tree.getRoot());
console.log(tree.getLevel());

tree.addContent("这是一个内容0");
tree.addContent("这是一个内容1");
tree.addContent("这是一个内容2");
// tree.addContent("这是一个内容3");
console.log(tree.getTree());



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
