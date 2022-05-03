// export const sumItems = cartItems => {
//     return {
//         itemCount: cartItems.reduce((total, product) => total + product.quantity, 0),
//         total: cartItems.reduce((total, product) => total + (product.quantity * product.price), 0)
//     }
// }

// const cartReducer = (state, action) =>{
//     switch(action.type) {
//         case'ADD_ITEM' :
//         // check if the item is already in the cart
//         if(!state.cartItems.find(item => item.id === action.payload.id)){
//             state.cartItems.push({...action.payload, quantity: 1});
//         }
//         return {
//             ...state,
//             cartItems: [...state.cartItems],
//             ...sumItems(state.cartItems)
//         }
//         default:
//             return state;

//     }
// }

// export default cartReducer;

