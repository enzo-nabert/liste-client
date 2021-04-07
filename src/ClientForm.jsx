import React, { Component } from 'react'

class ClientForm extends Component{

    state = {
        nouveauNom : ""
    }
    // onClientCreate
    submitHandler  = event => {
        event.preventDefault();
        let id = new Date().getTime();
        let nom = this.state.nouveauNom;
        this.props.onClientCreate({id,nom});
        this.setState({nouveauNom : ""});
      }

    changeHandler = event => {
        
        this.setState({nouveauNom : event.target.value});
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Nom client" value={this.state.nouveauNom} onChange={this.changeHandler}/>
                <input type="submit" value="Valider"/>
            </form>
        )
    }
}

export default ClientForm;