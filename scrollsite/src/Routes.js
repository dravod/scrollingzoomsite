import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/Home/NavBar";
import HomeScreen from "./containers/HomeScreen"
import Footer from './containers/Footer'

export default function Routes() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/about">
            <div />
          </Route>
          <Route path="/users">
            <div />
          </Route>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}