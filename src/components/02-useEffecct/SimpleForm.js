import React, { useEffect, useState } from 'react'
import './effect.css';
import Message from './Message';


export const SimpleForm = () => {

    const [fomrState, setfomrState] = useState({
        name:'',
        email:''
    });
    const{name,email}=fomrState;

    const handleInputChange =({target})=>{
        
        setfomrState({...fomrState,[target.name]:target.value})
    }

    useEffect(()=>{
        //console.log('hew');
    },[]);

    useEffect(()=>{
        //console.log('fomrState cambio');
    },[fomrState]);

    useEffect(()=>{
        //console.log('email cambio');
    },[email]);

    return (
        <div>
            <h1>useEffect</h1>
            <hr/>
            <div className='fomr-group'>
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange}></input>
            </div>
            <div className='fomr-group'>
                <input type="text" name="email" className="form-control" placeholder="Tu email" autoComplete="off" value={email} onChange={handleInputChange}></input>
            </div>
            {(name==='123')&&<Message/>}
        </div>

        
    )
}
export default SimpleForm;