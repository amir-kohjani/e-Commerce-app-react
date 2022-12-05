import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],

}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addItemWishList: (state, action) => {

            state.items.push(action.payload);

        },
        addItemsWishList: (state, action) => {
            state.items = action.payload;
        },
        removeItemWishList: (state, action) => {
          
            state.items = state.items.filter(item => item.id !==action.payload.id)
        },

    }
})

export const { addItemWishList,addItemsWishList, removeItemWishList } = wishListSlice.actions;
export default wishListSlice.reducer;