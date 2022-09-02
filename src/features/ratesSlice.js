import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ratesList: []
}

const ratesSlice  = createSlice({
    name: "rates",
    initialState,
    reducers: {
        addRate: (state, action) => {
            return {
                ...state,
                ratesList: [ ...state.ratesList, action.payload]
            }
        },
        editRate: (state, action) => {
            return {
                ...state,
                ratesList: state.ratesList.map(rate => {
                    if(rate.id === action.payload.id){
                        return action.payload
                    } else {
                        return rate
                    }
                })
            }
        },
        removeRate: (state, action) => {
            return {
                ...state,
                ratesList: state.ratesList.filter(rate => rate.id !== action.payload.id)
            }
        }
    }
})

export const { addRate, editRate, removeRate } = ratesSlice.actions

export default ratesSlice.reducer