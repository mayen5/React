import { useState } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

export const CounterApp = ( { value } ) => {
    
    // console.log( 'render' );

    // hook - useState
    const [ counter, setCounter ] = useState( value );

    const handleAdd =  () => {
        // console.log(event )
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 );
    }

    const handleSubstract =  () => {
        setCounter( counter - 1 );
    }

    const handleReset =  () => {
        setCounter( value );
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubstract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
