import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import "./App.scss";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Login from "./Components/Login";
import CreatePost from "./Components/Post/CreatePost";
import Signup from "./Components/Signup";
import PublicRoutes from "./Components/PublicRoutes";

function App(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <PublicRoutes exact path="/signup" component={Signup} />
        <PublicRoutes exact path="/login" component={Login} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
