import { createSlice } from '@reduxjs/toolkit'


const ProductSlice = createSlice({
    name:"products",
    initialState:{
       products:[]
    },
    reducers:{
        addProduct : (state,action)=>{
            state.products.push(action.payload)
        },
        deleteProduct: (state, action) => {
                state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProduct:(state,action)=>{
            if(action.payload.type === "INC_QUANTITY"){
                state.products = state.products.map((product) => {
                    if(product.id === action.payload.id){
                        return {
                            ...product,
                            quantity:product.quantity+1.
                        }
                    }
                    else{
                        return product
                    }
                })
            }
            else if(action.payload.type === "DEC_QUANTITY"){
                state.products = state.products.map((product) => {
                    if(product.id === action.payload.id && product.quantity > 1){
                        return {
                            ...product,
                            quantity:product.quantity-1.
                        }
                    }
                    else{
                        return product
                    }
                })
            }
        }
    },

});

export const {addProduct,deleteProduct,updateProduct} = ProductSlice.actions
export default ProductSlice.reducer
