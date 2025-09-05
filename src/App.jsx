import "./styles/main.scss"
import { BrowserRouter } from "react-router-dom"
import Header from "./layouts/Header/Header.jsx"
import Footer from "./layouts/Footer/Footer.jsx"
import AppRoute from "./components/AppRoute.jsx"

function App() {

  return (
    <>
    <BrowserRouter basename="/Furniro">
      <Header />
      <AppRoute/>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
