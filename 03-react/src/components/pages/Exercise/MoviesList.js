import './assets/styles.css'
import PropTypes from 'prop-types'
import React from 'react'

const MoviesList = ({ movies, addToCart }) => {
  return (
    <div className="movies__list">
      <ul>
        {movies.map(o => (
          <li className="movies__list-card" key={o.id}>
            <ul>
              <li>ID: {o.id}</li>
              <li>Name: {o.name}</li>
              <li>Price: ${o.price}</li>
            </ul>
            <button onClick={() => addToCart(o)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array,
  addToCart: PropTypes.func
}

export default MoviesList
