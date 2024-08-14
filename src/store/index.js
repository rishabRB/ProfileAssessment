import { configureStore } from '@reduxjs/toolkit'
import  SearchSlice from '../feature/SearchSlice'
import ProductSlice from '../feature/ProductSlice'



const store = configureStore({
    reducer:{
        search:SearchSlice,
        products:ProductSlice,
    }
})

export default store




