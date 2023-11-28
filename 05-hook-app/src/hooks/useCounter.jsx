import { useState } from "react";


export const useCounter = (initialState = 10) => {
        
        const [ state, setCounter ] = useState(initialState);

        const value = 1;
    
        const increment = ( value ) => {
            setCounter( state + value );
        }
    
        const decrement = ( value ) => {
            
            //if (state === 0) return;

            setCounter( state - value );
        }
    
        const reset = () => {
            setCounter( initialState );
        }
    
        return {
            state,
            increment,
            decrement,
            reset
        };
}