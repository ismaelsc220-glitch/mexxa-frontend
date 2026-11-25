const PRODUCTS_URL = 'https://dummyjson.com/products'
const PRODUCT_CATEGORY = 'mens-shirts'

async function requestProducts(url, signal) {
  const response = await fetch(url, { signal })

  if (!response.ok) {
    throw new Error(`La API respondió con el estado ${response.status}`)
  }

  const data = await response.json()

  if (!Array.isArray(data?.products)) {
    throw new Error('La respuesta de la API no contiene un arreglo de productos')
  }

  return data.products
}

function toCatalogProduct({ id, title, price, thumbnail, description }) {
  return { id, name: title, price, thumbnail, description }
}

export async function getProducts(signal) {
  const products = await requestProducts(
    `${PRODUCTS_URL}/category/${PRODUCT_CATEGORY}`,
    signal,
  )

  return products.map(toCatalogProduct)
}

export async function searchProducts(query, signal) {
  const params = new URLSearchParams({ q: query, limit: '0' })
  const products = await requestProducts(`${PRODUCTS_URL}/search?${params}`, signal)

  return products
    .filter((product) => product.category === PRODUCT_CATEGORY)
    .map(toCatalogProduct)
}