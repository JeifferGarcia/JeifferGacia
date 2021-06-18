import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Layout from "./Layout";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
