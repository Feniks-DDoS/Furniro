import Header from "./layouts/Header/Header.jsx"
import Hero from "./layouts/Section/Hero.jsx"
import Product from "./layouts/Section/Product.jsx"
import Range from "./layouts/Section/Range.jsx"
import Inspiration from "./layouts/Section/Inspiration.jsx"
import "./styles/main.scss"
import Furniture from "./layouts/Section/Furniture.jsx"
import Footer from "./layouts/Footer/Footer.jsx"

function App() {

  return (
    <>
     <Header />
     <Hero />
     <Range/>
     <Product/>
     <Inspiration/>
     <Furniture/>
     <Footer/>
    </>
  )
}

export default App
