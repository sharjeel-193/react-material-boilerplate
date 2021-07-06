import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {RouteWithLayout} from './components'
import {Home, Login, SignUp} from './views'
import {Minimal} from './layouts'

function Routes() {
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route path="/" exact component={Home} />
                <RouteWithLayout component={Login} layout={Minimal} path="/login" />
                
                <RouteWithLayout component={SignUp} layout={Minimal} path="/signup" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
