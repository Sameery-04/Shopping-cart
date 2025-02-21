import {createSlice} from "@reduxjs/toolkit";

const initialState=({
    no_of_cart:0,
})

export const CartSlice = createSlice({
    name:"No_of_cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        minus:(state,action)=>{
            return state.filter((item=> item.id!==action.payload))
        },
    }
})

export const {add,minus}= CartSlice.actions;
export default CartSlice.reducer;