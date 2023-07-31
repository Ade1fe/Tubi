import React from "react";
import { BrowserRouter as Route, Switch, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Policies from "./pages/Policies";


function App() {
  return (
    <div>
     <BrowserRouter>
        <Switch>
          <Routes>
            <Route index component={<Login />} />
            <Route path="/login" component={<Login />} />
            <Route path="/dashboard" component={<Dashboard />} />
            <Route path="/policies" component={<Policies />} />
          </Routes>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
