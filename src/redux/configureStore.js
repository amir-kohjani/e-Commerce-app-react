import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import cartReducer from './cart'
import userReducer from './user'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart : cartReducer,
        user : userReducer
    },
})