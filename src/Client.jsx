import React, { useState } from 'react'


const Client = ({ proprietes, onDelete }) => {

        return (
            <ul>
                {proprietes.map(client => <li key={client.id}><p>{client.nom}</p> <input type="button" value="X" onClick = {() => onDelete(client.id)}/></li>)}
            </ul>
            );
}

export default Client;