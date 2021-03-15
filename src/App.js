import React, { useState } from "react";

//global styling
import GlobalStyle from "./components/GlobalStyle";

//importing components
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Forms from "./pages/Forms";

//react routing & switching
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/bookings">
            <Forms />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
