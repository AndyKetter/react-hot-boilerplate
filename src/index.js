import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, Redirect, hashHistory, browserHistory } from 'react-router'
import App from './App'
import Repos from './Repos'
import About from './About'
import Home from './Home'

let routes = <Route path = "/" component = { App } >
        <Route path = "repos" component = { Repos } />
        <Route path = "about" component = { About }/>
        <IndexRoute component = { Home } /> <Redirect from = "messages" to = "about" / >
    </Route>

render(
    // <Router routes={routes} history={hashHistory}></Router>,
    <Router routes = {routes} history = {browserHistory} > < /Router>,
    document.getElementById('root')
)
