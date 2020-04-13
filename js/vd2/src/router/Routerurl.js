import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import New from '../components/New';
import Home from '../components/Home';
import Newdetail from '../components/Newdetail';

class Routerurl extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home" component={Home}></Route>
                <Route path="/tin-tuc" component={New}></Route>
                <Route path="/tin-tuc-chi-tiet/:slug.:id.html" component={Newdetail}></Route>
            </div>
        );
    }
}

export default Routerurl;