import './assets/styles.css'
import React, { useState } from 'react'
import MoviesList from './MoviesList'
import ShoppingCart from './ShoppingCart'

const Exercise01 = () => {
  const movies = [
    {
      id: 1,
      name: 'Star Wars',
      price: 20
    },
    {
      id: 2,
      name: 'Minions',
      price: 25
    },
    {
      id: 3,
      name: 'Fast and Furious',
      price: 10
    },
    {
      id: 4,
      name: 'The Lord of the Rings',
      price: 5
    }
  ]

  const discountRules = [
    {
      m: [3, 2],
      discount: 0.25
    },
    {
      m: [2, 4, 1],
      discount: 0.5
    },
    {
      m: [4, 2],
      discount: 0.1
    }
  ]

  const [cart, setCart] = useState([])

  const decrementQuantity = item => {
    const tempCart = [...cart]
    const index = tempCart.findIndex(el => el.id === item.id)
    const itemInCart = tempCart[index]
    itemInCart.quantity--
    if (itemInCart.quantity === 0) tempCart.splice(index, 1)
    setCart(tempCart)
  }
  const incrementQuantity = item => {
    const tempCart = [...cart]
    const itemInCart = tempCart.find(el => el.id === item.id)
    itemInCart.quantity++
    setCart(tempCart)
  }

  const addToCart = item => {
    const tempCart = [...cart]
    const itemInCart = tempCart.find(el => el.id === item.id)
    if (itemInCart) itemInCart.quantity++
    else tempCart.push({ ...item, quantity: 1 })
    setCart(tempCart)
  }

  const getTotal = () => {
    let total = cart
      .map(item => item.price * item.quantity)
      .reduce((a, b) => a + b, 0)

    for (const discountRule of discountRules) {
      if (discountRule.m.every(id => cart.map(el => el.id).includes(id))) {
        total = total * (1 - discountRule.discount)
      }
    }

    return total.toFixed(2)
  }

  return (
    <section className="exercise01">
      <MoviesList movies={movies} addToCart={addToCart} />
      <ShoppingCart
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        getTotal={getTotal}
      />
    </section>
  )
}

export default Exercise01
