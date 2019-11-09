import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import { Row, Layout, Menu } from 'antd';
import Home from './pages/Home';
import Clients from './pages/clients';
import Abouts from './pages/Abouts';
import LoginDemo from './pages/Login';

const { Header  } = Layout;

function Routers() {
  return (
    <Router>
      <Row>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '50px' }}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/clients">Clients</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu>
        </Header>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clients" component={Clients} />
          <Route path="/about" component={Abouts} />
          <Route path="/login" component={LoginDemo} />
        </Switch>
      </Row>
    </Router>
  );
}

export default Routers;