import { useForm } from "../hooks/useForm"
import { useContext } from 'react';
import { AuthContext } from "../context/authContext";

export const Register = () => {

    const { handleRegisterWithCredentials } = useContext(AuthContext)

    const { handleChange, pass, email } = useForm({
        initialState: {
            email: 'test@test2.com',
            pass: '123456'
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleRegisterWithCredentials(pass, email)
    }

    return (
        <div className="container-auth">
            <h2>Create an account</h2>

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
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    )
}