export const Login = () => {

    return (
        <div className="container-auth">
            <h2>Login</h2>

            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <div className="container-buttons">
                    <button type="submit">Log In</button>
                    <button type="button"> Google </button>
                </div>
            </form>
        </div>
    )
}