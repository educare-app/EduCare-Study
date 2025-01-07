import { Header, Footer } from "../components/index.components"
import { Outlet } from "react-router-dom"
import './app.css'

function App() {
  return (
    <>
      <div id="app">
        <Header/>
        <div id="outlets">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
