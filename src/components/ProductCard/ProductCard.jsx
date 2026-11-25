import './ProductCard.css'

const formatPrice = new Intl.NumberFormat('es-MX', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">
      {product.thumbnail && (
        <img
          className="product-card__image"
          src={product.thumbnail}
          alt={product.name}
          width={300}
          height={300}
          loading="lazy"
          decoding="async"
        />
      )}

      <h2 className="product-card__name">{product.name}</h2>
      <p className="product-card__price">
        Precio de ejemplo: {formatPrice.format(product.price)}
      </p>
      <button
        className="product-card__button"
        type="button"
        aria-label={`Ver detalles de ${product.name}`}
        aria-haspopup="dialog"
        onClick={(event) => {
          event.currentTarget.focus()
          onViewDetails(product)
        }}
      >
        Ver detalles
      </button>
    </article>
  )
}

export default ProductCard
