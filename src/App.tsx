import { Login, Register } from "./components"

const App = () => {
  return (
    <main>
      <h1><b>Auth with</b> <span>Firebase</span> <b>and</b> <span>React</span></h1>

      <section>
        <Login />
        <Register />
      </section>
    </main>
  )
}
export default App


