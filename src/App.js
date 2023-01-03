import './App.css';
import { useState } from 'react';
import NavScroll from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Component } from 'react';

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'



function App() {
  // let user = useSelector(state => state.user);
  // let chat = useSelector(state => state.chat);
  // let dispatch = useDispatch();
  // let navigate = useNavigate();

  return (
    <div className="App">
    <>
    <NavScroll/>
    <Router>
    <Routes>
      <Route exact path="/" element={ <LandingPage />} />
      <Route path="/login" element={ <LoginPage />} />
      <Route path="/register" component={ <RegisterPage/> } />
      <Route path="/forget-password" component={ <ForgetPasswordPage/> } />
      <Route path="/home" component={ <HomePage/> } />
    </Routes> 
    </Router>
    </>
      </div>

  );
}

export default App;

