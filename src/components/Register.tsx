export const Register = () => {



    return (
        <div className="container-auth">
            <h2>Create an account</h2>

            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <div className="container-buttons">
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    )
}