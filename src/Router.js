import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Clients from './pages/clients';
import Abouts from './pages/Abouts';

function Routers() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/clients" component={Clients}/>
          <Route path="/about" component={Abouts}/>
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;