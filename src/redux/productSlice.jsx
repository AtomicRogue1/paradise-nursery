import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = {
                id: nanoid(),
                name: action.payload.name,
                category: action.payload.category,
                price: action.payload.price,
                image: action.payload.image,
                quantity: action.payload.quantity || 1  // Set default quantity if not provided
            };
            state.products.push(product);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            state.products = state.products.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        },
    },
});

export const { addProduct, removeProduct, updateQuantity } = productSlice.actions;
export default productSlice.reducer;