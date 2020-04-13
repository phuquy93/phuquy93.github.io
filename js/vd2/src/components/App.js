import React from 'react';
import Nav from './Nav';
import Home from './Home';
import New from './New';
import Newdetail from './Newdetail';
import Footer from './Footer';
import Routerurl from '../router/Routerurl';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routerurl />
        <Footer />
      </div>
    </Router>  
  );
}

export default App;
