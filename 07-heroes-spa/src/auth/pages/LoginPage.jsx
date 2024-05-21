import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {

        login('Carmelo Mayén');

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <>
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />
                <br />
                <button
                    className='btn btn-primary'
                    onClick={onLogin}
                >
                    Login
                </button>
            </div>
        </>
    )
}
