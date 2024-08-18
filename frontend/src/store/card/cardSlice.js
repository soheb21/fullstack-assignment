import { createSlice } from "@reduxjs/toolkit";
import { addNewCardAsync, getAllCardsAsync, getCardByIdAsync } from "./cardAPI";
const initialState = {
    data: [],
    loading: false,
    error: null,
    card_detail: {}
};
export const cardSlice = createSlice({
    name: "card",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllCardsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllCardsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getAllCardsAsync.rejected, (state, action) => {
                state.loading = false;
                
                state.error = action.payload;
            })
            .addCase(getCardByIdAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCardByIdAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.card_detail = action.payload;
            })
            .addCase(getCardByIdAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addNewCardAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addNewCardAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload)
            })
            .addCase(addNewCardAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }


});
export default cardSlice.reducer;