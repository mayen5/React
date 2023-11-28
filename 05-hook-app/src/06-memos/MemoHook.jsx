import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Here we go...');
    }

    return `${ iterationNumber } iterations done!`;
}

export const MemoHook = () => {

    const { state, increment } = useCounter( 4000 );

    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff( state ), [ state ]);

  return (
    <>
        <h1>Counter: <small>{ state }</small> </h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button 
            className="btn btn-primary"
            onClick={ () => increment(1)}
        >
            +1
        </button>

        <button 
            className="btn btn-outline-primary"
            onClick={ () => setShow( !show ) }
        >
            Show/Hide { JSON.stringify( show ) }
        </button>
    </>
  )
}
