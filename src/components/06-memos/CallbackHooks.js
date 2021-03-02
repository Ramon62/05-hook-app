import React, { useCallback, useState } from 'react'
import '../02-useEffecct/effect.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {
    const [counter, setCounter] = useState(10)

    const icrement = useCallback((num)=>{
        setCounter(c =>c+num);
    },[setCounter,counter])

    return (
        <div>
            <h1>useCallback Hook {counter}</h1>
            <hr/>
            <ShowIncrement increment={icrement}/>
        </div>
    )
}
