import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Champions from "./pages/Champions";
import Summoner from "./pages/Summoner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/champions" component={Champions} />
          <Route path="/summoner/name=:search" component={Summoner} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
