import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Index from 'pages/index'
import asyncComponent from '@fs/async-component'

const Routes = ({ history }) => {
  return (
    <BrowserRouter history={history}>
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
    </BrowserRouter>
  )
}

export default Routes
