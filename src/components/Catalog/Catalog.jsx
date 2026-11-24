import { useEffect, useState } from 'react'
import { getProducts, searchProducts } from '../../utils/ThirdPartyApi.js'
import Preloader from '../Preloader/Preloader.jsx'
import ProductCard from '../ProductCard/ProductCard.jsx'
import ProductDetails from '../ProductDetails/ProductDetails.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx'
import './Catalog.css'

const PRODUCTS_PER_BATCH = 3

function Catalog() {
  const [request, setRequest] = useState({ query: '' })
  const [result, setResult] = useState(null)
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_BATCH)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      try {
        const products = request.query
          ? await searchProducts(request.query, controller.signal)
          : await getProducts(controller.signal)

        if (!controller.signal.aborted) {
          setResult({ request, status: 'success', products })
        }
      } catch {
        if (!controller.signal.aborted) {
          setResult({ request, status: 'error', products: [] })
        }
      }
    }

    loadProducts()

    return () => controller.abort()
  }, [request])

  const currentResult = result?.request === request ? result : null
  const status = currentResult?.status ?? 'loading'
  const products = currentResult?.products ?? []
  const visibleProducts = products.slice(0, visibleCount)

  function handleSearch(query) {
    setVisibleCount(PRODUCTS_PER_BATCH)
    setRequest({ query })
  }

  function handleShowMore() {
    setVisibleCount((count) => count + PRODUCTS_PER_BATCH)
  }

  return (
    <main className="catalog">
      <h1 className="catalog__title">Catálogo</h1>
      <SearchForm onSearch={handleSearch} />

      {status === 'loading' && <Preloader />}

      {status === 'error' && (
        <p role="alert">
          Lo sentimos, algo ha salido mal durante la solicitud. Es posible que
          haya un problema de conexión o que el servidor no funcione. Por favor,
          inténtalo más tarde.
        </p>
      )}

      {status === 'success' && products.length === 0 && (
        <p>No se ha encontrado nada</p>
      )}

      {visibleProducts.length > 0 && (
        <ul className="catalog__grid">
          {visibleProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} onViewDetails={setSelectedProduct} />
            </li>
          ))}
        </ul>
      )}

      {visibleCount < products.length && (
        <button className="catalog__show-more" type="button" onClick={handleShowMore}>
          Mostrar más
        </button>
      )}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  )
}

export default Catalog
