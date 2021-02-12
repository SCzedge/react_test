import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import About from './About';
import NotFound from './notFound';
import AuthRoute from './authRoute';



export default function App() {
  const [user,setUser] = useState(null);
  const authenticated = user != null;
  const login =({email,apssword}) => setUser(signIn({email,password}));
  const logout =() => setUser(null);

  return (
    <Router>
      <header>
        <Link to ="/">
          <button>home</button>
        </Link>
        <Link to ="/about">
          <button>about</button>
        </Link>
        <Link to ="/profile">
          <button>profile</button>
        </Link>
      </header>
      <hr/>
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/profile' component={Profile}/>
          <Route Component={NotFound}/>
          <AuthRoute
          authenticated={authenticated}
          path ='/profile'
          render = { props => <Profile user = { user} {...props}/>}
          />
        </Switch>
      </main>
    </Router>
  )
}
