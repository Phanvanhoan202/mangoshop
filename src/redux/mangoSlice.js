import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productData: [],
    userInfo: null,
};

export const mangoSlice = createSlice({
    name: 'mango',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find((item) => item._id === action.payload._id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        deleteCart: (state, action) => {
            state.productData = state.productData.filter((item) => item._id !== action.payload);
        },
        resetCart: (state, action) => {
            state.productData = [];
        },
        increamentQuantity: (state, action) => {
            const item = state.productData.find((item) => item._id === action.payload._id);

            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find((item) => item._id === action.payload._id);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },

        // ========= USER Start Here =========
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
        // ========= USER end Here =========
    },
});

export const { addToCart, deleteCart, resetCart, increamentQuantity, decrementQuantity, addUser, removeUser } =
    mangoSlice.actions;
export default mangoSlice.reducer;
