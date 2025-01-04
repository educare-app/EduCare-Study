import { Header, Footer } from "../components/index.components"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
