import React from 'react'
import GetWeather from './GetWeather'
import Home from './Home'
import Header from './Header'
import Forecast from './Forecast'
import Details from './Details'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {
    render() {
        const globalHeaderTitle = "My First React App"
        return (
          <div className="main">
            <Router>
              <div id='router'>
                <Header title={globalHeaderTitle} />
                <Route exact path="/" component={Home} />
                <Route exact path="/forecast/:city" component={Forecast} />
                <Route exact path="/details/:city/:id" component={Details} />
              </div>
            </Router>
          </div>
        )
      }
}

export default App;
