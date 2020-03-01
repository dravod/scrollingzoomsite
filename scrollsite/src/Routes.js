import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeScreen from "./containers/HomeScreen"

export default function Routes() {
  return (
            <HomeScreen/>
  
  );
}