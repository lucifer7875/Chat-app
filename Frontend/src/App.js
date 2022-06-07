import './App.css';
import React, { useState } from "react";
import Home from './components/Home/home';
import Login from './components/Login/login';
import Register from './components/Register/register';
import PersonalChat from './components/PersonalChat/personalChat';
import WithNavigate from './components/Profile/profile';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({
    // userName:"",
    // firstName: "",
    // lastName:"",
    // mobileNumber:"",
    // password:"",
  })
  return (

    <div className="App">

      <Router>
        <Routes>
          <Route path='/home'
            element=
            {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          >
          </Route>
          <Route path='/' element={<Login setLoginUser={setLoginUser} />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/profile' element={<WithNavigate />}></Route>
          <Route path='/personalChat' element={<PersonalChat />}></Route>

        </Routes>
      </Router>

    </div>
  )
}

export default App;
