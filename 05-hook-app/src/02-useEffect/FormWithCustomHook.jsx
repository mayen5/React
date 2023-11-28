import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, handleInputChange, handleResetForm, username, email, password } = useForm(
        {
            username: '',
            email: '',
            password: ''
        }
    );


  return (
    <>
        <h1>Form with custom hook</h1>
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

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={ password }
            onChange={ handleInputChange }
        />

        <button onClick={ handleResetForm } className="btn btn-primary mt-2"> Reset </button>

    </>
  )
}
