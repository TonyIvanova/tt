import {createSlice} from'@reduxjs/toolkit'; 

// db table orders config for reference 
//     order_id SERIAL PRIMARY KEY,
//     date_stamp DATE NOT NULL DEFAULT CURRENT_DATE,
//     products_ids text,
//     order_description text, -- contains titles + sizes.  
//     name VARCHAR(280),
//     email VARCHAR(280),
//     shipping_address TEXT, 
//     paymenet_id VARCHAR(280),
//     total_payed DECIMAL(12,2),
//     status VARCHAR(280) -- ordered, sent, recieved 

const initialState =  { 
products: [1, 2, 3, 4
    // {id, product_id, title, size, price}
]};

const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        added(state, action){
            state.products.push(action.payload);
        },
        deleted(state, action){
            // state.products.filter((item) => ite) write correct deletion system 
        } 

    }, 
    extraReducers: (builder) => {
        //here goes fetching; 
    }
});


export const {added} = cartSlice.actions; 
export default cartSlice.reducer; 