const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if (action.type === 'REMOVE') {
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }
    }

    if (action.type === 'INCREASE') {
        // const item = state.cart.map(item => item.id === action.payload)
        // item.amount += 1
        // return { ...state, cart: [...state.cart]}
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })
        return { ...state, cart: tempCart }
    }

    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
        })
            .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
    }

    if (action.type === 'GET_TOTALS') {
        console.log(state.cart)
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem
            console.log(price, amount)
            const itemTotal = price * amount;
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        }, { total: 0, amount: 0 })
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }

    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, products: action.payload, loading: false }
    }

    if (action.type === 'ADD_PRODUCT') {
        let tempCart = state.products;
        let cartBox = state.cart;

        const id = action.payload;
        const addedProduct = tempCart.find((product) => product.id === id);
        let newCart;
        if (cartBox.some(e => e.id === addedProduct.id)) {
            newCart = [...cartBox]
            /* vendors contains the element we're looking for */
        } else {
            newCart = [...cartBox, { ...addedProduct, amount: 1 }]
        }
        console.log(newCart)
        return { ...state, cart: newCart };
    }

    return state
}

export default reducer;