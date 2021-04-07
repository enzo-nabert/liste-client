import React, { useState } from 'react'

const ClientForm = ({onClientCreate}) => {
    
    const [nouveauNom,setNouveauNom] = useState("");
    

    const submitHandler  = event => {
        event.preventDefault();
        let id = new Date().getTime();
        onClientCreate({id,nouveauNom});
        setNouveauNom("");
      }

    const changeHandler = event => setNouveauNom(event.target.value);
    
    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Nom client" value={nouveauNom} onChange={changeHandler}/>
            <input type="submit" value="Valider"/>
        </form>
    )
}

export default ClientForm;