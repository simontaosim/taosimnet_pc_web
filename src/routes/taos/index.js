import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,

} from 'react-router-dom';
import { Card,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment } from 'semantic-ui-react'
class TaosPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    const items = [
      {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
      },
      {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
      },
      {
        header: 'Project Report - June',
        description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%',
      },
      {
        header: ' Report - June',
        description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%',
      },
    ]
    const CardExampleGroupProps = () => (
      <Card.Group items={items} onClick={(e)=>{
        this.props.history.push("/taos/one_tao");
        // console.log(e.target);
      }} />
    )
    return (

      <Segment style={{ padding: '8em 0em' }} vertical>

        <Grid  container stackable verticalAlign='middle'>
          <Header>所有社区频道</Header>
          <Grid.Row textAlign='center'>
          <CardExampleGroupProps />
          </Grid.Row>
        </Grid>
      </Segment>

    )
  }
}

export default TaosPage;
