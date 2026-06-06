import {createSlice} from "@reduxjs/toolkit";

const cartSlice =createSlice(
    {
        name:"cart",
        initialState:{
            items:["Burger", "Pizza"],
        },
        reducers:{
            addItem:(state,action)=>{
                // mutating the state here
                state.items.push(action.payload);
            },
             removeItem:(state,action)=>{
                state.items= state.items.filter(item=> item.id !== action.payload.id);
             },
             clearCart:(state)=>{
                state.items.pop();
             }
            },
    });

    export default cartSlice.reducer;
    export const {addItem,removeItem,clearCart} = cartSlice.actions;