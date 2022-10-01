import './assets/styles.css'
import PropTypes from 'prop-types'
import React from 'react'

const ShoppingCart = ({
  cart,
  decrementQuantity,
  incrementQuantity,
  getTotal
}) => {
  return (
    <div className="movies__cart">
      <ul>
        {cart.map(x => (
          <li className="movies__cart-card" key={x.id}>
            <ul>
              <li>ID: {x.id}</li>
              <li>Name: {x.name}</li>
              <li>Price: ${x.price}</li>
            </ul>
            <div className="movies__cart-card-quantity">
              <button onClick={() => decrementQuantity(x)}>-</button>
              <span>{x.quantity}</span>
              <button onClick={() => incrementQuantity(x)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="movies__cart-total">
        <p>Total: ${getTotal()}</p>
      </div>
    </div>
  )
}

ShoppingCart.propTypes = {
  cart: PropTypes.array,
  decrementQuantity: PropTypes.func,
  incrementQuantity: PropTypes.func,
  getTotal: PropTypes.func
}

export default ShoppingCart
