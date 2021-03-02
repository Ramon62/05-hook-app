import React, { useState } from 'react';
import '../02-useEffecct/effect.css';
import { MutipleCustomHooks } from '../03-ejemplos/mutipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);


    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            {show && <MutipleCustomHooks/>}
            <button className="btn btn-primary" onClick={()=>setShow(!show)}>Mostrar/Esconder</button>
        </div>
    )
}
