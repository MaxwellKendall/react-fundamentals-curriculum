import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Forecast from './Forecast'
import Details from './Details'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="main">
                        <Switch>
                            <Route exact path='/' component={Home}></Route>
                            <Route exact path='/results' component={Forecast}></Route>
                            <Route path='/details' component={Details}></Route>
                        </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
