import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Volleyball from "./components/Volleyball/Volleyball";
import Tennis from "./components/Tennis/Tennis";
import Basketball from "./components/Basketball/Basketball";
import Soccer from "./components/Soccer/Soccer";
import Swimming from "./components/Swimming/Swimming";
import MMA from "./components/MMA/MMA";
import Form from "./components/Form/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Volleyball" component={Volleyball} />
            <Route path="/Tennis" component={Tennis} />
            <Route path="/Basketball" component={Basketball} />
            <Route path="/Soccer" component={Soccer} />
            <Route path="/MMA" component={MMA} />
            <Route path="/Swimming" component={Swimming} />
            <Route path="/Form" component={Form} />
          </Switch>
        </div>
      </Router>
    );
  }
}