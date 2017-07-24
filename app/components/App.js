import React from 'react'
import GetWeather from './GetWeather'
import Home from './Home'
import Routes from './Routes'
import Header from './Header'

class App extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        city: '',
    }
    this.updateCity = this.updateCity.bind(this);
    }
    updateCity(event) {
        const value = event.target.value.split(',')[0];
        this.setState(() => {
            return {
                city: value
                }
            })
    }
    render() {
        const globalHeaderTitle = "My First React App";
        const homeFlag = window.location.href.substr(21).length;
        return (
            <div className="main">
                <Header
                    title={globalHeaderTitle}
                    />
                <Routes />
            </div>
        )
    }
}

export default App;
