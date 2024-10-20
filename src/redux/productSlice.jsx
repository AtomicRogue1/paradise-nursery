import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    products: [
        { id: nanoid(), name: 'Monstera', price: 25, image: '/images/monstera.png' },
        { id: nanoid(), name: 'Fiddle Leaf Fig', price: 40, image: '/images/fig.png' },
        { id: nanoid(), name: 'Snake Plant', price: 15, image: '/images/snakeplant.png' },
      ],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = {
                id: nanoid(),
                name : action.payload.name ,
                price : action.payload.price,
                image : action.payload.image
            }
            state.products.push(product)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id)
        },
        updateQuantity: (state, action) => {
            state.products = state.products.map(item => 
                item.id === action.payload.id 
                ? { ...item, quantity: action.payload.quantity } 
                : item
            )
        },
    }
})

export const { addProduct, removeProduct, updateQuantity } = productSlice.actions

export default productSlice.reducer
