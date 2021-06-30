import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GoallyTemplateLibrary } from "./pages/GoallyTemplateLibrary";
import { Authorization } from "./pages/Authorization/Authorization";

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Authorization />
        </Route>
        <Route path="/:userToken">
          <GoallyTemplateLibrary />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
