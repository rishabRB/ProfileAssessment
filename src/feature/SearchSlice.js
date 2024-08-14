import { createSlice } from '@reduxjs/toolkit'

const SearchSlice = createSlice({
    name:"search",
    initialState:{
        searchParameter : "mobile",
    },
    reducers:{
        update:(state,action)=>{
            state.searchParameter = action.payload
        }
    }
});

export const {update} = SearchSlice.actions
export default SearchSlice.reducer
