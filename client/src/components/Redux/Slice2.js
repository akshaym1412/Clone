import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const productone=createAsyncThunk("product",async(id)=>{
   const {data}=await Axios.get(`https://clone-six-sigma.vercel.app/product/${id}`)
   return data;
})

const productSlice=createSlice(
    {
        name:"Product",
        initialState:{
            users:{},
            loading:false,
            error:null
        },
        extraReducers:builder=>{
            builder.addCase(productone.pending,(state)=>{
                state.loading=true
            });
            builder.addCase(productone.fulfilled,(state,action)=>{
                state.loading=false
                state.users=action.payload
            });
            builder.addCase(productone.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload
            });
        }
    }
)

export default productSlice.reducer;
