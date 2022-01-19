import React, { useEffect } from 'react';
import './App.css';
import Header from './components/static/Header';
import Nav from './components/static/Nav';
import Home from './components/static/Home/Home';
import { Route, Redirect } from 'react-router-dom';
import Menu from './components/menu/Menu';
import About from './components/static/About';
import Careers from './components/careers/Careers';
import Order from './components/orders/Order';
import Login from './components/sessions/Login';
import Register from './components/sessions/Register';
import Contact from './components/static/Contact';
import { register, authStatus } from './actions/user_actions'

import { connect } from 'react-redux';

function App({ register, authStatus }) {
  useEffect(() => {
    authStatus()
  }, [])

  return (
    <div className="App">
      {/* This renders the Header and Nav components */}
      <Route path={"/"} 
        render={(props) => {
          return (
            <>
              <Header />
              <Nav />
            </>
          )
        }}
      />

      {/* This renders the Home Page but only at "/" */}
      <Route exact path={"/"} component={Home} />
     
      <Route exact path={"/menu"}
        render={(props) => <Menu />}
      />

      <Route exact path={"/about"}
        render={(props) => <About />}
      />

      <Route exact path={"/contact"}
        render={(props) => <Contact />}
      />

      <Route exact path={"/careers"}
        render={props => <Careers />}
      />

      <Route exact path={"/order"}
        render={props => <Order />}
      />


      <Route exact path={"/login"}
        render={props => <Login {...props} />}
      />


      <Route exact path={"/register"}
        render={props => <Register register={register} {...props} />}
      />
      
    </div>
  );
}

export default connect(
  state => ({
    currentUser: state.userReducer.currentUser,
    loading: state.loadReducer.loading
  }),
  {
    register,
    authStatus
  }
)(App);