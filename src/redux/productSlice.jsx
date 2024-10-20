import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                const product = {
                    id: action.payload.id || nanoid(),
                    name: action.payload.name,
                    category: action.payload.category,
                    price: action.payload.price,
                    image: action.payload.image,
                    quantity: 1
                };
                state.products.push(product);
            }
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