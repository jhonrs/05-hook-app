import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Darthion',
        email: 'jhonrs813@gmail.com'
    });


    const { username, email } = formState;

    const onInputChange = ({ target })=>{

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }


    useEffect(()=>{
        /* console.log("useEffect called"); */
    },[]);

    
    useEffect(()=>{
        /* console.log("formState change"); */
    },[ formState ]);

    
    useEffect(()=>{
        /* console.log("email change"); */
    },[ email ]);

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={onInputChange}
        />


    {
        ( username === 'Darthion' ) && <Message />
    }


        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="Ejemplo@correo.com"
            name="email"
            value={ email }
            onChange={onInputChange}
        />
    </>
  )
}
