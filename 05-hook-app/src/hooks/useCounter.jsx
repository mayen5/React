import { useState } from "react";


export const useCounter = (initialState = 10) => {

    const [state, setCounter] = useState(initialState);

    const value = 1;

    const increment = (value = 1) => {
        setCounter((current) => current + value);
    }

    const decrement = (value = 1) => {

        //if (state === 0) return;

        setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    };
}