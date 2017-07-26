import React from 'react';
var PropTypes = require('prop-types');

class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text,
            speed: this.props.speed
        }
    }
    componentDidMount(){
        const stopper = `${this.props.text}...`;
        this.interval = window.setInterval(() => {
            if(this.state.text === stopper){
                this.setState( () => {
                    return {
                        text: this.props.text
                    }
                })
            } else {
                console.log('...');
                this.setState((prevState) => {
                    return {
                        text: prevState.text + '.'
                    }
                })
            }
        }, this.props.speed);
    }
    componentWillUnmount(){
        console.log('Loading is done');
        window.clearInterval(this.interval);
    }
    render(){
        return (
            <h1 className="loading">{this.state.text}</h1>
        )
    }

}

Loading.PropTypes = {
    text : PropTypes.string.isRequired,
    speed : PropTypes.number.isRequired
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}

export default Loading
