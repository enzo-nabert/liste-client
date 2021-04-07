import React, { Component } from 'react'

class Incrementer extends Component{

    state = {
        value: 1,
        timer: null,
        step : 1,
        buttonText : "Pause",
        isPause : false
    }

    componentDidMount(){
        this.setState({step: this.props.step,value: this.props.start,timer : window.setInterval(() => this.increment(),1000)});
    }

    componentWillUnmount(){
        window.clearInterval(this.state.timer);
    }

    increment(){
        this.setState((state) => ({value : state.value + state.step}));
    }

    pauseHandler = () => {
        this.setState({isPause : true});
        this.setState({buttonText : "Play",handler: this.playHandler});
        window.clearInterval(this.state.timer);
    }

    playHandler = () => {
        this.setState({isPause : false});
        this.setState({buttonText : "Pause",handler: this.pauseHandler,timer: window.setInterval(() => this.increment(),1000)});
    }
    render(){
        return (
            <div>
                <p>Compteur: {this.state.value}</p>
                <input type = "button" value={this.state.buttonText} onClick = {  this.state.isPause ? this.playHandler : this.pauseHandler}/>
            </div>
        );
    }
}

export default Incrementer;