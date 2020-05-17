import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";

function Routes() {
  return (
    <BrowserRouter>
      {/* Faz que apenas uma rota seja executada por momento 
      o exact é para que só quando for / chamar a página
      */}
      <Switch>
        <Route path="/" exact component={Logon}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
