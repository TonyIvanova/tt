import {createSlice, createAsyncThunk} from'@reduxjs/toolkit'; 

//creating thunk for fetching 
export const fetchProducts = createAsyncThunk(
    'catalog/fetchProducts', async (thunkAPI) => {
        try{ 
            const response = await fetch('http://localhost:3002/api/products'); 
            const items = await response.json();
          return items; 
        } catch (err){
            
        }
       
    }
)

const initialState =  { products: [], loading: 'idle' };

export const catalogSlice = createSlice({
    name: 'catalog', 
    initialState, 
   
    extraReducers: (builder) => {
        //here goes fetching; 
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            if(state.loading === 'idle'){
                state.loading = 'pending';
            }
        })
        .addCase(fetchProducts.fulfulled, (state, action) => {
            state.products.push(action.payload);
            state.loading = 'fulfilled'; 
        })
        .addCase(fetchProducts.rejected, (state, action) => {
           state.loading = 'idle'; 
        })
    }
});

export default catalogSlice.reducer; 