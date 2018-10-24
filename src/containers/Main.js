import React from 'react'
import IndexPage from '../views/IndexPage'
import CervezaPage from '../views/CervezaPage'
import CervezasPage from '../views/CervezasPage'
import ContactPage from '../views/ContactPage'
import NoMatchPage from '../views/NoMatchPage'
import { Route, Switch } from 'react-router-dom'
import './Main.css'

const Main = () => (
  <main>
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/cervezas" exact component={CervezasPage} />
      <Route path="/cervezas:id" component={CervezaPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NoMatchPage} />
    </Switch>
  </main>
)

export default Main
