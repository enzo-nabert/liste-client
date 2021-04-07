import React, { Component } from 'react'

class Client extends Component{

    render(){
        const { proprietes, onDelete } = this.props;

        return (
            <ul>
                {proprietes.map(client => <li key={client.id}><p>{client.nom}</p> <input type="button" value="X" onClick = {() => onDelete(client.id)}/></li>)}
            </ul>
            )
    }
}

export default Client;