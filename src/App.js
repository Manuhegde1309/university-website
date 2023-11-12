import React from "react"

import "./App.css"
import {BrowserRouter as Router} from "react-router-dom"
import Header from "./components/common/heading/Header"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./components/home/Home"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Price from "./components/pricing/Price"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"





const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/courses' exact component={CourseHome}/> 
        <Route path='/team' exact component={Team}/> 
        <Route path='/pricing' exact component={Price}/>
        <Route path='/journal' exact component={Blog}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
      <Footer />
    </Router>
  </>
  )
}
export default App