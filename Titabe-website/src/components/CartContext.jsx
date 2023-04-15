import { createContext, useReducer } from "react";

export const CartContext = createContext()

const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

const reducer = (state, action) => {
    const { type } = action
    
    switch (type) {
        case 'ADD_TO_CART': {
            const { id } = action.payload
            const productIndex = state.findIndex((item) => item.id === id)

            if(productIndex >= 0) {
                const newCart = structuredClone(state)
                newCart[productIndex].quantity += 1
                updateLocalStorage(newCart)
                return newCart
            }

            const newCart = [
                ...state,
                {
                    ...action.payload, quantity: 1
                }
            ]
            updateLocalStorage(newCart)
            return newCart
        }
        case 'DECREASE_FROM_CART': {
            const { id } = action.payload
            const productIndex = state.findIndex((item) => item.id === id)

            if(productIndex >= 0) {
                const newCart = structuredClone(state)
                newCart[productIndex].quantity -= 1
                updateLocalStorage(newCart)
                return newCart
            }
            return
        }
        case 'REMOVE_FROM_CART': {
            const { id } = action.payload
            const newCart = state.filter(item => item.id != id)
            updateLocalStorage(newCart)
            return newCart
        }
        case 'CLEAR_CART': {
            updateLocalStorage([])
            return []
        }

    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }

    const decreaseFromCart = (product) => {
        dispatch({
            type: 'DECREASE_FROM_CART',
            payload: product
        })
    }

    const removeFromCart = (product) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        })
    }

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return (
        <CartContext.Provider value={{ cart: state, addToCart, decreaseFromCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}