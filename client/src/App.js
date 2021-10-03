import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Login from "./Components/Login";
import CreatePost from "./Components/Post/CreatePost";
import Signup from "./Components/Signup";

function App(params) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
