import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home.js";
import Champions from "./pages/Champions.js";
import Summoner from "./pages/Summoner.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/champions" component={Champions} />
          <Route path="/summoner" component={Summoner} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
