import "./App.css"
import React, { Component } from 'react'
import Client from "./Client"
import ClientForm from "./ClientForm"
// import Incrementer from './Incrementer'

class App extends Component{

  state = {
    clients : [ 
      {id: 1, nom: "Albert"},
      {id: 2, nom: "Bernard"},
      {id: 3, nom: "Claire"}
    ]
  }

  addHandler = client => {
    let clients = [...this.state.clients];
    clients.push(client);
    this.setState({clients});
  }

  deleteHandler = id => {
    let clients = [...this.state.clients];
    let index = clients.findIndex(client => id === client.id);
    clients.splice(index,1);
    this.setState({clients});
  }
  render(){

    return (
      <div id="test">
        <h1>Liste de clients</h1>
        <ClientForm onClientCreate = {this.addHandler}/>
        <Client proprietes={this.state.clients} onDelete={this.deleteHandler}/>
      </div>
    )
  }

//   render(){
//     return (
//       <div>
//         <Incrementer start={100} step = {10}/>
//       </div>
//     );
//   }
// }
// Incrementer.defaultProps = {
//   step: 1
};

export default App;
