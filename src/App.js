import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//COMPONENTS
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/homePage";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";

//INCLUDES
import "./Assets/css/default.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" component={Homepage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
