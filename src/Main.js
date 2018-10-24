import React, { Component } from 'react'
import IndexPage from './IndexPage'
import CervezaPage from './CervezaPage'
import CervezasPage from './CervezasPage'
import ContactPage from './ContactPage'
import NoMatch from './NoMatch'
import { Route, Switch } from 'react-router-dom'
import './Main.css'

const Main = () => (
  <main>
  <Switch>
    <Route path="/" exact component={IndexPage} />
    <Route path="/cervezas" exact component={CervezasPage} />
    <Route path="/cervezas:id" component={CervezaPage} />
    <Route path="/contact" component={ContactPage} />
    <Route component={NoMatch} />
  </Switch>
</main>
)

export default Main
