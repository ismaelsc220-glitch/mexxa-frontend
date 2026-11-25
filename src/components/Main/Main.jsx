import { Link } from 'react-router'
import './Main.css'

function Main() {
  return (
    <main className="main">
      <section className="main__intro" aria-labelledby="main-title">
        <h1 className="main__title" id="main-title">
          Catálogo streetwear
        </h1>
        <p className="main__description">
          Encuentra camisas y playeras de estilo urbano. Busca por nombre y
          revisa las fotos de cada prenda.
        </p>

        <div className="main__actions">
          <Link className="main__link" to="/catalogo">
            Explorar catálogo
          </Link>
          <Link className="main__link main__link--secondary" to="/About">
            Sobre mí
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Main