import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Register from './Component/Register/Register';
import Info from './Component/Info/Info';
import Dashboard from './Component/Dashboard/Dashboard';
import Buyform from './Component/Buyform/Buyform';
import Login from './Component/Login/Login';
// import { Login } from './Component/Login/Login';

function App() {
  return (
    <div className="App ">
     
     <Router>

       <switch>
         <Route exact path="/" component={Dashboard}></Route>
          <Route exact path='/info' component={Info}></Route>
         <Route exact path='/register' component={Register}></Route>
         <Route exact path='/contact' component={Contact}></Route> 
         <Route exact path='/login' component={Login}></Route> 
         <Route exact path='/buy' component={Buyform}></Route>        
         </switch>
     </Router>
    </div>
      )
}

export default App;
