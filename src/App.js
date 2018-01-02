import React, { Component } from 'react';
import './App.css';
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

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>社区</Menu.Item>
      <Menu.Item as='a'>公告</Menu.Item>
      <Menu.Item as='a'>博客</Menu.Item>
      <Menu.Item as='a'>矿机众筹</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>登陆</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>注册</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)
class App extends Component {
  state = {}

 = () => this.setState({ visible: false })
showFixedMenu = () => this.setState({ visible: true })

render() {
  const { visible } = this.state;

  return (
    <div>
      { visible ? <FixedMenu /> : null }

      <Visibility
        onBottomPassed={this.showFixedMenu}
        onBottomVisible={this.}
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
              <Menu.Item as='a' active>社区</Menu.Item>
              <Menu.Item as='a'>公告</Menu.Item>
              <Menu.Item as='a'>博客</Menu.Item>
              <Menu.Item as='a'>矿机众筹</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted>登录</Button>
                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>注册</Button>
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
            <Button primary size='huge'>
              立即加入
              <Icon name='right arrow' />
            </Button>
          </Container>
        </Segment>
      </Visibility>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>如果你不能理解区块链，那么也许这些猫可以向你解释</Header>
              <p style={{ fontSize: '1.33em' }}>
                以太坊云养猫可以说是爆款了 ……<a>查看更多</a>
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>区块链工作收入持续爆发</Header>
              <p style={{ fontSize: '1.33em' }}>
                区块链技术开发去年岗位需求增加了200% ……<a>查看更多</a>
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                rounded
                size='large'
                src='https://images.idgesg.net/images/article/2017/10/fintech_financial_technology_blockchain_network_distributed_ledger_wireframe_thinkstock_678152428-100739350-large.jpg'
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>关注更多行业新闻</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}><a>查看所有社区版块</a></Header>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}><a>进入个人中心</a></Header>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>RUST语言开发入门</Header>
          <p style={{ fontSize: '1.33em' }}>
            欢迎学习本教程！本教程将教你如何使用 Rust 编程语言。Rust 是一门强调安全、性能和并发性的系统编程语言。
            它为了达到这几个目的，甚至没有一个垃圾收集器。
            这也使 Rust 能够应用到其他语言做不到的地方：嵌入到其他语言，有指定空间和时间需求的程序，写底层代码（如设备驱动程序和操作系统）。
            针对当前的其他编程语言，Rust 做到了没有运行时(Runtime)，没有数据竞争。 Rust 也致力于实现“零成本抽象”，
            尽管这些抽象给人的感觉像一个高级的语言。即使是这样，Rust 仍然可以做到像一个低级的语言那样的精确控制。
          </p>
          <Button as='a' size='large'>继续阅读</Button>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>更多干货</a>
          </Divider>
          <Header as='h3' style={{ fontSize: '2em' }}>EOS.IO 技术白皮书</Header>
          <p style={{ fontSize: '1.33em' }}>
          摘要： EOS.IO 软件引入一种新的区块链架构设计，它使得去中心化的应用可以横向和纵向的扩展。
          这通过构建一个仿操作系统的方式来实现，在它之上可以构建应用程序。
          该软件提供帐户、身份验证、数据库、异步通信和跨越数百个 CPU 内核或集群的应用程序调度。
          由此产生的技术是一种区块链架构，它可以扩展至每秒处理百万级交易，消除用户的手续费，并且允许快速和轻松的部署去中心化的应用。
          </p>
          <Button as='a' size='large'>继续阅读</Button>
        </Container>
      </Segment>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='关于' />
                <List link inverted>
                  <List.Item as='a'>开发路线图</List.Item>
                  <List.Item as='a'>联系方式</List.Item>
                  <List.Item as='a'>理念</List.Item>
                  <List.Item as='a'>官方博客</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='反馈' />
                <List link inverted>
                  <List.Item as='a'>体验报告</List.Item>
                  <List.Item as='a'>常见 FAQ</List.Item>
                  <List.Item as='a'>出错提交</List.Item>
                  <List.Item as='a'>商务合作</List.Item>
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
    </div>
  )
  }
}

export default App;
