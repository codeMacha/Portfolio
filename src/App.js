import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
//import signinpage from './pages/signinpage';
import Home from './pages';
import 'semantic-ui-css/semantic.min.css'



function App() {
  return (
    <Router>
      {/* <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/sigin' component={signinpage} exact/> 
      </Switch> */}
      <Home />
    </Router>
  );
}

export default App;
