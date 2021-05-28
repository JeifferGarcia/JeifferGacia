import React from "react"
import { BrowserRouter,Route,Switch } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Layout from "./Layout"
import About from "../pages/About"
import Portafolio from "../pages/Porfolio"

function App (){
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path = "/contact" component={Contact}/>
        <Route exact path = "/about" component={About}/>
        <Route exact path = "/portafolio" component={Portafolio}/>
        <Route exact path = "/" component={Home}/>
      </Switch>
      </Layout>   
    </BrowserRouter>
  )
}

export default App;