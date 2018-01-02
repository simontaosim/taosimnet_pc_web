import React, { Component } from 'react';

class TaoPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log(this.props.match.params);
  }
  render(){
    return (
      <div><br/><br/><br/><br/>一个频道</div>
    )
  }
}

export default TaoPage;
