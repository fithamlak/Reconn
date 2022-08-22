import React from "react";

import RoutePages from "../RoutePages";
import Home from "./home/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

function ForAll() {
  return (
    <Router>
      <Home />

      <Routes>
        <Route path="/Reconnaissance" exact element={<RoutePages />}></Route>
      </Routes>
    </Router>
  );
}

export default ForAll;
