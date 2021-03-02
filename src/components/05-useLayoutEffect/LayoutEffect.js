import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './payout.css';

export const LayoutEffect = () => {

    const {counter, icrement} = useCounter(1);

    const {data} =useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const{ quote}=!!data&&data[0];
    const pTag = useRef();
    const [boxSixe, setBoxSixe] = useState({});

    useLayoutEffect(() => {
       setBoxSixe(pTag.current.getBoundingClientRect());
    }, [quote])

    return ( 
    <div>
        <h1> Layout effect</h1>
        <hr/>        
            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-0">{quote}</p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSixe,null,3)}
            </pre>
       <button className="btn btn-primary" onClick={icrement}>Siguiente</button>
       
    </div>
    )
}
