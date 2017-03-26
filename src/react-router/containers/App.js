import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

//import HomePage from "./HomePage";
import LogInPage from "Containers/LogInPage";
//import DashboardPage from "./DashboardPage";
import MatchWhenAuthorized from "./MatchWhenAuthorized";
import lazyme from 'lazy-load-react';

const HomePage = lazyme(() => System.import('Containers/HomePage'));
const DashboardPage = lazyme(() => System.import('./DashboardPage'));

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.authenticate = this.authenticate.bind(this);
    this.signout = this.signout.bind(this);
  }

  authenticate() {
    this.setState({isAuthenticated: true});
  }

  signout() {
    this.setState({isAuthenticated: false});
  }

  render() {

    //const { } = this.props;

    const {isAuthenticated} = this.state;

    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          {!isAuthenticated && <Link to="/login">Log in</Link>}
        </nav>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" render={props => {
          return <LogInPage authenticate={this.authenticate} {...props}/>
        }}/>
        <MatchWhenAuthorized isAuthenticated={isAuthenticated} pattern="/dashboard"
                             component={DashboardPage}/>
      </div>
    )
  }
}

App.propTypes = {};
