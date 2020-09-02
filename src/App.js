import React from 'react';
import './App.css';
import Home from  './pages/home'
import Error from  './pages/error'
import Rooms from  './pages/rooms'
import SingleRoom from  './components/SingleRoom'
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
      <Route exact  path="/" component = {Home}/>
      <Route exact path="/rooms/" component = {Rooms}/>
      <Route exact path="/rooms/:slug" component = {SingleRoom}/>
      {/* When no match found then error route render */}
      <Route component = {Error}/>
      </Switch>
      </div>

  );
}

export default App;
