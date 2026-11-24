import { useId, useState } from 'react'
import './SearchForm.css'

function SearchForm({ onSearch }) {
  const fieldId = useId()
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  function handleChange(event) {
    const value = event.target.value
    setQuery(value)

    if (value.trim()) {
      setError('')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const searchTerm = query.trim()

    if (!searchTerm) {
      setError('Por favor, introduzca una palabra clave')
      return
    }

    setError('')
    onSearch(searchTerm)
  }

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <label className="search-form__label" htmlFor={fieldId}>
        Busca una prenda
      </label>
      <div className="search-form__controls">
        <input
          className="search-form__input"
          id={fieldId}
          type="search"
          name="q"
          placeholder="Ej. plaid"
          value={query}
          onChange={handleChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fieldId}-error` : undefined}
        />
        <button className="search-form__button" type="submit">
          Buscar
        </button>
      </div>
      {error && (
        <p className="search-form__error" id={`${fieldId}-error`} role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

export default SearchForm   