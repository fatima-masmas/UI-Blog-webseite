import React from "react";
import Topbar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
    <Topbar/>
     <Register />
     <Routes>
          <Route exsact path="/">
            <Home />
          </Route>
          <Route path="/register" >{user ? <Home/> :<Register /> }</Route>
          <Route path="/login">{user ? <Home/> :<Login /> }</Route>
          <Route path="/settings">{user ? <Settings />:<Login /> }</Route>
          <Route path="/write">{user ? <Write /> :<Register /> }</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          
     
    </Routes>
    </Router>
  );
}

export default App;
