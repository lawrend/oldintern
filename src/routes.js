// import all relevant pieces of react-router-dom, and all components rendered by routes
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import ErrorRoute from './components/ErrorRoute.js';
import Home from './containers/Home.js'
import Reaction from './containers/Reaction.js'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/reaction" component={Reaction} />
        <Route component={ErrorRoute} />
      </Switch>
        )
}
};

export default withRouter(Routes);


