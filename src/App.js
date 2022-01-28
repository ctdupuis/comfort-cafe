import React, { useEffect } from 'react';
import './App.css';
import Header from './components/static/Header/Header';
import Nav from './components/static/Nav/Nav';
import Home from './components/static/Home/Home';
import { Route, Redirect } from 'react-router-dom';
import Menu from './components/menu/Menu';
import About from './components/static/About';
import Careers from './components/careers/Careers';
import Order from './components/orders/Order';
import Login from './components/sessions/Login';
import Register from './components/sessions/Register';
import Contact from './components/static/Contact';

// actions
import { register, authStatus, login, logout } from './actions/user_actions';
import { getItems } from './actions/item_actions';

import { connect } from 'react-redux';

function App({
   register, authStatus, currentUser, login, logout, getItems, items
  }) 
  {
  
  useEffect(() => {
    authStatus();
  }, [])

  return (
    <div className="App">
      {/* This renders the Header and Nav components */}
      <Route path={"/"} 
        render={(props) => {
          return (
            <>
              <Header currentUser={currentUser} logout={logout}
              {...props} />
              <Nav />
            </>
          )
        }}
      />

      {/* This renders the Home Page but only at "/" */}
      <Route exact path={"/"} component={Home} />
     
      <Route exact path={"/menu"}
        render={(props) => <Menu getItems={getItems} items={items} {...props} />}
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
        render={props => !currentUser ?
        <Login login={login} {...props} />
          :
        <Redirect to={"/"} />
        }
      />


      <Route exact path={"/register"}
        render={props => !currentUser ?
        <Register register={register} {...props} />
          :
        <Redirect to={"/"} />
        }
      />
      
    </div>
  );
}

export default connect(
  state => ({
    currentUser: state.userReducer.currentUser,
    loading: state.loadReducer.loading,
    items: state.itemReducer.items,
    alert: state.alertReducer.alert
  }),
  {
    register,
    authStatus,
    login,
    logout,
    getItems
  }
)(App);