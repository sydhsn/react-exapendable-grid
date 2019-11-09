/* eslint-disable no-script-url */
import React from 'react';
import Routers from './Router';
import { Layout } from "antd";
import "antd/dist/antd.css";
import './App.scss';

const { Footer } = Layout;

class App extends React.Component{

  render(){
     return(      
      <Layout>
        <Routers/>
        <Footer>
        <a href="#!">Portfolio</a>
        </Footer>
      </Layout>
     )
  }

}
export default App;
