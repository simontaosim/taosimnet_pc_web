import React, { Component } from 'react';

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
  Visibility

} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import createHistory from 'history/createHashHistory';
const history = createHistory();

class HomeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

    if (this.isHome()) {
      this.setState({
        visible: false
      })
    }else{
      this.setState({
        visible: true
      })
    }
  }
  isHome(){
    if (this.props.history.location.pathname === '/') {
      return true;
    }else{
      return false;
    }
  }

  hasBanner(){
    if (this.isHome()) {
      return (<HomeBanner history={this.props.history} />);
    }else{
      return null;
    }
  }

  hideFixedMenu = () => {
    if (this.isHome()) {
      this.setState({ visible: false });
      return

    }
    this.setState({ visible: true })
  }
  showFixedMenu = () => {
    if (this.isHome()) {
      this.setState({ visible: true })
      return

    }
    this.setState({ visible: true })
  }
  render(){
    const FixedMenu = () => (
      <Menu fixed='top' size='large'>
        <Container>
        <Menu.Item as='a' active onClick={()=>{
          this.props.history.push('/')
        }}>首页</Menu.Item>
          <Menu.Item as='a' active onClick={()=>{
            this.props.history.push('/taos')
          }}>社区频道</Menu.Item>
          <Menu.Item as='a'onClick={()=>{
            this.props.history.push('/board')
          }}>公告</Menu.Item>
          <Menu.Item onClick={()=>{
            this.props.history.push('/blog')
          }} as='a'>博客</Menu.Item>
          <Menu.Item onClick={()=>{
            this.props.history.push('/miner')
          }} as='a'>矿机众筹</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button  onClick={()=>{
                this.props.history.push('/login')
              }} as='a'>登陆</Button>
            </Menu.Item>
            <Menu.Item>
              <Button  onClick={()=>{
                this.props.history.push('/reg')
              }} as='a' primary>注册</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
    const { visible } = this.state;
    if (this.isHome()) {
      return (
        <div>
          { visible ? <FixedMenu /> : null }
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item as='a' active  onClick={()=>{
                this.props.history.push('/')
              }}>社区</Menu.Item>
              <Menu.Item as='a' onClick={()=>{
                this.props.history.push('/board')
              }}>公告</Menu.Item>
              <Menu.Item onClick={()=>{
                this.props.history.push('/blog')
              }} as='a'>博客</Menu.Item>
              <Menu.Item as='a' onClick={()=>{
                this.props.history.push('/miner')
              }}>矿机众筹</Menu.Item>
              <Menu.Item position='right'>
                <Button onClick={()=>{
                  this.props.history.push('/login')
                }} as='a' inverted>登录</Button>
                <Button onClick={()=>{
                  this.props.history.push('/reg')
                }} as='a' inverted style={{ marginLeft: '0.5em' }}>注册</Button>
              </Menu.Item>
            </Menu>
          </Container>

          <Container text>
            <Header
              as='h1'
              content='道者'
              inverted
              style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
            />
            <Header
              as='h2'
              content='链上生活社区'
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Button  onClick={()=>{
              this.props.history.push('/reg')
            }} primary size='huge' >
              立即加入
              <Icon name='right arrow' />
            </Button>
          </Container>
        </Segment>
        </Visibility>
        </div>
      )
    }else{
      return (
         <FixedMenu />
      )
    }


  }
}
export default HomeBanner;
