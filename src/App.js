import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import RegisteredCategory from './Components/RegisteredCategory/RegisteredCategory';
import Admin from './Components/Admin/Admin';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Nomatch from './Components/Nomatch/Nomatch';
import AddEvent from './Components/AddEvent/AddEvent';

export const UserContext = createContext()

function App() {

  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivetRoute path="/registration/:id">
            <Registration />
          </PrivetRoute>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/registrations">
            <RegisteredCategory/>
          </Route>
          <Route path="*">
            <Nomatch/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
