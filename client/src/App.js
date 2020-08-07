import React, { Component } from 'react';
import './assert/css/style.css'
import MeetTheBirds from './MeetTheBirds'
import Home from './Home'
import Layout from './Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import { browserHistory } from 'react-router';

class App extends Component {


  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/meet" component={MeetTheBirds} />
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
