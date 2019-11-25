import React from "react";
import NavBar from "./NavBar";
import "./App.css";
import { Switch, Redirect, Route } from "react-router-dom";
import GamesContainer from "./containers/GamesContainer";
import ShowsContainer from "./containers/ShowsContainer";
import HomeContainer from "./containers/HomeContainer";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/games" render={() => <GamesContainer />} />
        <Route path="/shows" render={() => <ShowsContainer />} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
}

export default App;
