import { useForm } from '../hooks/useForm';
export const Login = () => {

    const { handleChange, handleSubmit, pass, email } = useForm({
        initialState: {
            email: 'test@test1.com',
            pass: '123456'
        },
        typeForm: 'log-in'
    })

    const handleSignInWithGoogle = () => {
        console.log('google')
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
                    <button type="button" onClick={handleSignInWithGoogle}> Google </button>
                </div>
            </form>
        </div>
    )
}