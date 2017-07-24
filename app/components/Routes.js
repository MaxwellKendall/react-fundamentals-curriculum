import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Forecast from './Forecast'
import Details from './Details'
import Home from './Home'

const Routes = (props) =>{
    return (
        <Router>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/forecast' component={Forecast}></Route>
                    <Route path='/details' component={Details}></Route>
                </Switch>
            </Router>
    )
}

export default Routes;
