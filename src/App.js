import MainLandingPage from "MainLandingPage.js";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "styles/globalStyles.css";
import "tailwindcss/dist/base.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
