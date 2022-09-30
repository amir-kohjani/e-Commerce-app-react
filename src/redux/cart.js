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
        deleteItem: (state, action) => {
            state.items.splice(state.items.indexOf(action.payload), 1);
        },

    }
})

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;