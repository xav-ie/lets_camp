import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CampFireSection from "./components/CampFireSection";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/fire" exact component={CampFireSection} />
        <Route path="/"  component={Error404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
