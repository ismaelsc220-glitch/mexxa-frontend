import './Preloader.css'

function Preloader() {
  return (
    <div className="preloader" role="status">
      <span className="preloader__spinner" aria-hidden="true" />
      <p>Cargando prendas…</p>
    </div>
  )
}

export default Preloader