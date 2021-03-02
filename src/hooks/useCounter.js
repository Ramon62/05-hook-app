import { useState } from "react"


export const useCounter = (initialState = 10) => {
    const [counter, setcounter] = useState(initialState);


    const icrement = () => {
        setcounter(counter + 1);
    }
    const decremet = () => {
        setcounter(counter - 1);
    }
    const reset = () => {
        setcounter(initialState);
    }
    return {
        counter,
        icrement,
        decremet,
        reset
    }

}