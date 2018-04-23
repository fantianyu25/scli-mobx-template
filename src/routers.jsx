import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Index from 'pages/index'
import asyncComponent from '@fs/async-component'
import PropTypes from 'prop-types'

const Routes = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />

        <Route
          path="/page1"
          exact
          component={asyncComponent(() => import('pages/page1'))}
        />

        <Route
          path="/page2"
          exact
          component={asyncComponent(() => import('pages/page2'))}
        />
      </Switch>
    </Router>
  )
}

Routes.propTypes = {
  history: PropTypes.any
}

export default Routes
