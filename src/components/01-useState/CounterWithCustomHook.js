import React from 'react'
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
    const { state, icrement, decremet, reset } = useCounter(100);

    return ( <
        >
        <
        h1 > Counter with Hook: { state } < /h1> <
        hr / >
        <
        button onClick = {
            () => icrement(1) }
        className = "btn" > +1 < /button> <
        button onClick = { reset }
        className = "btn" > Reset < /button> <
        button onClick = {
            () => decremet(1) }
        className = "btn" > -1 < /button>        

        <
        />
    )
}

export default CounterWithCustomHook;