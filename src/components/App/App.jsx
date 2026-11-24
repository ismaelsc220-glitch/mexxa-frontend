import { Route, Routes } from 'react-router'
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Catalog from '../Catalog/Catalog.jsx'
import Footer from '../Footer/Footer.jsx'
import About from '../About/About.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
