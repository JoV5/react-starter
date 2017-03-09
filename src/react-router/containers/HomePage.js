import React, {Component} from "react";
//import {Link} from "react-router-dom";

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log('HomePage-------------------componentWillMount')
  }

  componentWillReceiveProps() {
    console.log('HomePage-------------------componentWillReceivesProps')
  }

  render() {
    // const { } = this.props;

    // const { } = this.state;

    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

HomePage.propTypes = {};
