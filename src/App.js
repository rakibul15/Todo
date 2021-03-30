import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tasklistpage from "./views/Tasklistpage";

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
         
          </Route>
          <Route path="/users">
           
          </Route>
          <Route path="/">
            <Tasklistpage></Tasklistpage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

