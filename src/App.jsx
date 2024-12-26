// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/login";
// import Barang from "./pages/Barang"
// import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        {/* <Route path="/home" component={Home} /> */}
        <Route path="/login" component={Login} />
        {/* <Route path="/barang" component={Barang} /> */}

      </Switch>
    </Router>
  );
};

export default App;