import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from '../../types'

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProduct(product) {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

// An Example of Async action processed by redux-thunk middleware
export function fetchProduct(productId) {
  return (dispatch) => {
    return fetch(`products/${productId}`)
      .then(resp => resp.json())
      .then(product => {
        dispatch(addProduct(product))
      })
  }
}
