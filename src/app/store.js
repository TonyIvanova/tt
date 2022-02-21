import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from '../features/cart/cartSlice'; 
import catalogReducer from '../features/catalog/catalogSlice'; 

export const store = configureStore({
    reducer: {
        // cart: cartReducer 
        catalog: catalogReducer
    }
}); 