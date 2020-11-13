import React, { Component } from 'react';
import Cart from './../Cards';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BootstrapCarousel from "./../Carosal";
import CenteredGrid from './../ShoppingCart.js/Cart';
import App from './../../App';
import Payment from './../ShoppingCart.js/Payment';


class Routers extends Component {
    render() {
        return (
            <Router>

            <div className="router">
            <Switch>
            <Route path="/" component={BootstrapCarousel}/>
            <Route path="/Cart" component={CenteredGrid}/>
            <Route path="/Payment" component={Payment}/>
          
            </Switch>
                
            </div>
            </Router>
        );
    }
}

export default Routers;