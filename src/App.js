import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Register from './Component/Register/Register';
// import { Login } from './Component/Login/Login';

function App() {
  return (
    <div className="App">
      
     <Router>
       <switch>
         <Route exact path='/' component={Register}></Route>
          {/* <Route exact path='/adduser' component={AddUser}></Route>
         <Route exact path='/login' component={Login}></Route>         */}
         </switch>
     </Router>
    </div>
      )
}

export default App;
