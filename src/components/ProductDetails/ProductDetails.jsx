import { useEffect, useId, useRef } from 'react'
import './ProductDetails.css'

function ProductDetails({ product, onClose }) {
  const dialogRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.showModal()

    return () => dialog.close()
  }, [])

  function handleClose() {
    dialogRef.current.close()
    onClose()
  }

  function handleCancel(event) {
    event.preventDefault()
    handleClose()
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }

  return (
    <dialog
      className="product-details"
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
    >
      <div className="product-details__content">
        <button
          className="product-details__close"
          type="button"
          aria-label="Cerrar detalles"
          onClick={handleClose}
        >
          ×
        </button>

        <h2 className="product-details__title" id={titleId}>
          {product.name}
        </h2>

        {product.thumbnail && (
          <img
            className="product-details__image"
            src={product.thumbnail}
            alt={product.name}
            width={300}
            height={300}
          />
        )}

        <p>{product.description || 'Descripción no disponible.'}</p>
      </div>
    </dialog>
  )
}

export default ProductDetails