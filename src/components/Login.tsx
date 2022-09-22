import { useForm } from '../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export const Login = () => {

    const { handleLoginWithGoogle, handleLoginWithCredentials } = useContext(AuthContext)

    const { handleChange, pass, email } = useForm({
        initialState: {
            email: 'test@test1.com',
            pass: '123456'
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleLoginWithCredentials(pass, email)
    }

    return (
        <div className="container-auth">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    value={email}
                />
                <input
                    name="pass"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={pass}
                />

                <div className="container-buttons">
                    <button type="submit">Log In</button>
                    <button type="button" onClick={handleLoginWithGoogle}> Google </button>
                </div>
            </form>
        </div>
    )
}