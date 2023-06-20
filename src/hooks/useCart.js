import { useContext } from 'react'
import { CartContext } from '../context/cart'

function useCart() {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const checkProductInCart = (id) => {
    return cartContext.cart.some((item) => item.id === id)
  }

  return { ...cartContext, checkProductInCart }
}

export default useCart
