export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART ',
  CLEAR_CART: 'CLEAR_CART'
}

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, actionPayload) => {
    const { id } = actionPayload
    const productInCartIndex = state.findIndex((item) => item.id === id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(state)
      newCart[productInCartIndex].quantity += 1
      updateLocalStorage(newCart)
      return newCart
    }

    const newCart = [...state, { ...actionPayload, quantity: 1 }]
    updateLocalStorage(newCart)
    return newCart
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, actionPayload) => {
    const { id } = actionPayload
    const newCart = state.filter((item) => item.id !== id)
    updateLocalStorage(newCart)
    return newCart
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, actionPayload) : state
}
