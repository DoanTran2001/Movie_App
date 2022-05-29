import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Catalog from '../pages/Catalog'
import Detail from '../pages/Detail/Detail'
import Home from '../pages/Home'

function Routes() {
  return (
    <Switch>
      <Route
        path="/:category/search/:keyword"
        component={Catalog}
      />
      <Route
        path="/:category/:id"
        component={Detail}
      />
      <Route 
        path="/:category"
        component={Catalog}
      />
      <Route 
        path="/"
        exact
        component={Home}
      />
    </Switch>
  )
}

export default Routes
