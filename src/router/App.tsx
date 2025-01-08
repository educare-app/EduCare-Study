import { Header, Footer } from "../components/index.components"
import ErrorBoundary from "./ErrorBoundary"
import { Outlet } from "react-router-dom"
import './app.css'

function App() {
  return (
    <>
      <div id="app">
        <Header/>
        <ErrorBoundary>
          <div id="outlets">
            <Outlet/>
          </div>
        </ErrorBoundary>
        <Footer/>
      </div>
    </>
  )
}

export default App
