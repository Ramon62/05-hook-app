import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffecct/effect.css';
import { Small } from './Small';


export const Memorize = () => {
    const {counter, icrement} = useCounter(10);
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Memorize: <Small value={counter}></Small></h1>
            <hr/>
            <button className="btn btn-primary" onClick={icrement}>Incrementas</button>
            <button className="btn btn-outline-primary ml-3" onClick={()=>{
                setShow(!show);
            }}>Show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
