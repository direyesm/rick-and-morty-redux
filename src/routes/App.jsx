import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.scss";
import Characters from "../containers/Characters";
import Favorite from "../containers/Favorites";
import Layaout from "../components/Layout";

const App = () => (
  <BrowserRouter>
    <Layaout>
      <Switch>
        <Route exact path="/favorites" component={Favorite} />
        <Route exact path="/" component={Characters} />
      </Switch>
    </Layaout>
  </BrowserRouter>
);
export default App;
