import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Register from './Component/Register/Register';
<<<<<<< HEAD
import Info from './Component/Info/Info';
import Dashboard from './Component/Dashboard/Dashboard';
=======
>>>>>>> 94a6f0d40a44253a57d3c0b87442d642cdb5265b
// import { Login } from './Component/Login/Login';

function App() {
  return (
<<<<<<< HEAD
    <div className="App ">
     
     <Router>
       <switch>
         <Route exact path="/" component={Dashboard}></Route>
          <Route exact path='/info' component={Info}></Route>
         <Route exact path='/reg' component={Register}></Route>
         <Route exact path='/contact' component={Contact}></Route> 
         {/* <Route exact path='/sell' component={Sell}></Route>         */}
=======
    <div className="App">
      
     <Router>
       <switch>
         <Route exact path='/' component={Register}></Route>
          {/* <Route exact path='/adduser' component={AddUser}></Route>
         <Route exact path='/login' component={Login}></Route>         */}
>>>>>>> 94a6f0d40a44253a57d3c0b87442d642cdb5265b
         </switch>
     </Router>
    </div>
      )
}

export default App;
