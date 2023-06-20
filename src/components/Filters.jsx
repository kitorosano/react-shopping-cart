import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrince = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChangeMinPrince}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select
          id='category'
          onChange={handleChangeCategory}
        >
          <option value='all'>Todas</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
          <option value='fragances'>Fragancias</option>
          <option value='skincare'>Cuidado</option>
          <option value='groceries'>Comestibles</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
