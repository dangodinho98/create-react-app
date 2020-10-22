import MainLandingPage from "MainLandingPage.js";
import AboutUs from "pages/AboutUs";
import BlogIndex from "pages/BlogIndex";
import Login from "pages/Login";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "styles/globalStyles.css";
import "tailwindcss/dist/base.css";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/AboutUs" component={AboutUs} />
        {/* <Route path="/Cases" component={Cases} /> */}
        <Route path="/login" component={Login} />
        <Route path="*" component={MainLandingPage} />
      </Switch>
    </BrowserRouter>
  );
}
