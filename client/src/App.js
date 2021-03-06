import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//COMPONENTS
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/homePage";
//import About from "./components/pages/about";
//import Projects from "./components/pages/projects";
//import Contact from "./components/pages/contact";
import CardLayout from "./components/pages/cardLayout";
import Resume from "./components/pages/resume";
import Form from "./components/pages/form";

//INCLUDES
import "./Assets/css/default.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" component={Homepage} />
          <Route exact path="/Skills" component={CardLayout} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Contact" component={Form} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
