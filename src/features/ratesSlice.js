import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const ratesSlice  = createSlice({
    name: "rates",
    initialState,
    reducers: {
        addRate: (state, action) => {
            state = [...state, action.payload]
        },
        editRate: (state, action) => {
            state = state.map(rate => {
                if(rate.id === action.payload.id){
                    return action.payload
                } else {
                    return rate
                }
            })
        },
        removeRate: (state, action) => {
            state = state.filter(state => state.id !== action.payload.id)
        }
    }
})

export const { addRate, editRate, removeRate } = ratesSlice.actions

export default ratesSlice.reducer