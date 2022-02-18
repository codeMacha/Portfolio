import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import resume from './pages/Resume';
import Home from './pages';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/resume' component={resume} exact/> 
      </Switch> 
    </Router>
  );
}

export default App;
