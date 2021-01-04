import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import home from "./components/pages/home";
import about from "./components/pages/about";
import contact from "./components/pages/contact";
import offers from "./components/pages/offers";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
        <Route path="/" exact component= {home}></Route>

        <Route path="/offers" exact component= {offers}></Route>

        <Route path="/about" exact component= {about}></Route>

        <Route path="/contact" exact component= {contact}></Route>
        </Switch>
      </Router>
    
      </>
  
  );
}

export default App;
