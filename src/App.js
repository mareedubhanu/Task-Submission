import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import Login from './components/login';
import Admin from './components/panels/admin';
import Customer from './components/panels/customer';
import Admininfo from './components/panels/admin addinfo/admininfo';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Manager from './components/panels/manager';
import Costumerage from './components/panels/consumerage';
import Managerdesig from './components/panels/managerdesig';


function App() {

  const role = localStorage.getItem('role');
  return (
    <FirebaseDatabaseProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/task">
            {
              role != null && role == 1 ? <Admininfo /> : role == 2 ? <Costumerage /> : role == 3 ? <Managerdesig /> : <Login />
            }
          </Route>
          <Route exact path="/task/admin">
            <Admin />
          </Route>
          <Route exact path="/task/customer">
            <Customer />
          </Route>
          <Route exact path="/task/manager">
            <Manager />
          </Route>
        </Switch>

      </Router>
    </FirebaseDatabaseProvider >
  );
}

export default App;
