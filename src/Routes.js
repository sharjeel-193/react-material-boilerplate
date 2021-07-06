import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {RouteWithLayout} from './components'
import {Admins, Home, Login, SignUp, Users} from './views'
import {Minimal, Main} from './layouts'

function Routes() {
    return (
        <BrowserRouter basename="/">
            <Switch>
                {/* <Route path="/" exact component={Home} /> */}
                <RouteWithLayout path="/dashboard" exact component={Home} layout={Main} />
                <RouteWithLayout path="/users" component={Users} layout={Main} />
                <RouteWithLayout path="/admins" component={Admins} layout={Main} />
                <RouteWithLayout component={Login} exact layout={Minimal} path="/login" />
                <RouteWithLayout component={SignUp} exact layout={Minimal} path="/signup" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
