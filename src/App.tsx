import { useContext } from "react"
import { Login, Register } from "./components"
import { AuthContext } from './context/authContext';


const App = () => {

  const { status, userId } = useContext(AuthContext)

  if (status === 'checking') return <p className="loading"><span>Checking credentials, wait a moment...</span></p>

  return (
    <main>
      <h1><b>Auth with</b> <span>Firebase</span> <b>and</b> <span>React</span></h1>
      {
        (status === 'authenticated' && userId)
          ? <HomePage />
          : <AuthPage />
      }
    </main>
  )
}
export default App

export const HomePage = () => {
  const { userId, handleLogOut } = useContext(AuthContext)

  return (
    <section>
      <h5>Your ID is: <span>{userId}</span></h5>
      <button className="btn-logout" onClick={handleLogOut}>Log out</button>
    </section>
  )
}

export const AuthPage = () => {
  return (
    <section>
      <Login />
      <Register />
    </section>
  )
}


