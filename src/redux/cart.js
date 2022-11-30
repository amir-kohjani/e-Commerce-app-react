import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {

            state.items.push(action.payload);

        },
        addItems: (state, action) => {
            state.items = action.payload;
        },
        deleteItem: (state, action) => {
            state.items.splice(state.items.indexOf(action.payload), 1);
        },

    }
})

export const { addItem,addItems, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;