import "./App.css"
import React, { useState } from 'react'
import Client from "./Client"
import ClientForm from "./ClientForm"
// import Incrementer from './Incrementer'

const App = () => {

  const [clients, setclients] = useState(
    [ 
      {id: 1, nom: "Albert"},
      {id: 2, nom: "Bernard"},
      {id: 3, nom: "Claire"}
    ]
  );

  const addHandler = client => {
    let updatedClients = [...clients];
    updatedClients.push(client);
    setclients(updatedClients);
  }

  const deleteHandler = id => {
    let updatedClients = [...clients];
    let index = updatedClients.findIndex(client => id === client.id);
    updatedClients.splice(index,1);
    setclients(updatedClients);
  }

    return (
      <div id="test">
        <h1>Liste de clients</h1>
        <ClientForm onClientCreate = {addHandler}/>
        <Client proprietes={clients} onDelete={deleteHandler}/>
      </div>
    );
};

export default App;
