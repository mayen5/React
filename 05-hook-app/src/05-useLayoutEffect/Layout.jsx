import { useCounter, useFetch } from "../hooks/";
import { LoadingComponent, CharacterComponent } from "../03-examples";

export const Layout = () => {
  
  const { state, increment, decrement, reset } = useCounter(0);

  const { data, isLoading, hasError } = useFetch( `https://thronesapi.com/api/v2/Characters/${state}` );
  const characters  = useFetch( `https://thronesapi.com/api/v2/Characters/` );

  const { title, fullName, family, imageUrl } = !!data && data ;

  return (
    <>
        <h1>Custom Hooks</h1>
        <hr />

        {
          isLoading 
          ? (
            <LoadingComponent />
          )
          : (
            <CharacterComponent title={title} fullName={fullName} family={family} imageUrl={imageUrl} />
          )
        } 

        {
          !!data && data && state >= 0 && family
          ? (
            <>
                <hr />
                <br />
                <br />
              <button onClick={ () => decrement(1)} className="btn btn-primary"> Previous Character </button>
              <button onClick={ () => reset()} className="btn btn-primary"> Reset </button>
              <button onClick={ () => increment(1)} className="btn btn-primary"> Next Character </button>
            </>

          )
          : (
            <div className="alert alert-danger text-center">
              <p>The character does not exists! The character ID must be equal or greater than 0.</p>
              <p>Click on reset button to start again!.</p>
              { hasError && <p>Error: {hasError}</p> }
              <button onClick={ () => reset()} className="btn btn-primary"> Reset </button>

            </div>
          )
        }

    </>
  )
}
