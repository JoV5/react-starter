import React, {Component} from "react";

export default class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log('DashboardPage-------------------componentWillMount')
  }

  componentWillReceiveProps() {
    console.log('DashboardPage-------------------componentWillReceivesProps')
  }

  render() {

    // const { } = this.props;

    // const { } = this.state;

    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

DashboardPage.propTypes = {};
