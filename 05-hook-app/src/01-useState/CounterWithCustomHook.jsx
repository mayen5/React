import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();
    //const [incrementValue, setIncrementValue] = useState(1);

  return (
    <>
        <h1>Counter with Hook: { state }</h1>
        <hr />

        <label htmlFor="incrementValue">Increment/Decrement Value: </label>  
        <br />
        <input type="text" name="incrementValue" id="incrementValue" value={incrementValue} onChange={e => setIncrementValue(Number(e.target.value))}/>

        <br />
        <br />
        <br />


        <button onClick={ () => increment(incrementValue)} className="btn btn-primary">+1</button>
        <button onClick={ reset } className="btn btn-primary">Reset</button>
        <button onClick={ () => decrement(incrementValue)} className="btn btn-primary">-1</button>
    </>
  )
}
