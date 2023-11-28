import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'cmayen',
        email: 'carmelo5mayen@gmail.com'
    });

    const { username, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
        //console.log('Hey first useState!');
    }, []);

    useEffect(() => {
        //console.log('Hey useState for formState!');
    }, [formState]);

    useEffect(() => {
        //console.log('Hey useState for email!');
    }, [email]);

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            autoComplete="off"
            value={ username }
            onChange={ handleInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="carmelo5mayen@gmail.com"
            name="email"
            autoComplete="off"
            value={ email }
            onChange={ handleInputChange }
        />

        { 
            (username === 'cmayen5') && <Message />
        }
    </>
  )
}
