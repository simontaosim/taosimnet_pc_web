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


class Footer extends Component {

  render(){
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='关于' />
                <List link inverted>
                  <List.Item as='a' onClick={()=>{
                    this.props.history.push('/roadmap')
                  }}>开发路线图</List.Item>
                  <List.Item onClick={()=>{
                    this.props.history.push('/contact')
                  }} as='a'>联系方式</List.Item>
                  <List.Item onClick={()=>{
                    this.props.history.push('/blog')
                  }} as='a'>官方博客</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='互动' />
                <List link inverted>
                  <List.Item  onClick={()=>{
                    this.props.history.push('/joinus')
                  }} as='a'>加入我们</List.Item>
                  <List.Item   onClick={()=>{
                    this.props.history.push('/FAQ')
                  }} as='a'>常见 FAQ</List.Item>
                  <List.Item  onClick={()=>{
                    this.props.history.push('/feedback')
                  }} as='a'>出错反馈</List.Item>
                  <List.Item  onClick={()=>{
                    this.props.history.push('/business')
                  }} as='a'>商务合作</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>版权</Header>
                <p>https://github.com/simontaosim/taosimnet_pc_web</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default Footer;
