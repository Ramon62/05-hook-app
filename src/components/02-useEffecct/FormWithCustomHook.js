import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css';



export const FomrWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });
    const{name,email,password}=formValues;
    useEffect(()=>{
        console.log("el email cambio");
    },[email]);

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <h1>FomrWithCustomHook</h1>
            <hr/>
            <div className='fomr-group'>
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange}></input>
            </div>
            <div className='fomr-group'>
                <input type="text" name="email" className="form-control" placeholder="Tu email" autoComplete="off" value={email} onChange={handleInputChange}></input>
            </div>
            <div className='fomr-group'>
                <input type="password" name="password" className="form-control" placeholder="*****"  value={password} onChange={handleInputChange}></input>
            </div>
            
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
        
    )
}
export default FomrWithCustomHook;