import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const getAllCardsAsync = createAsyncThunk("/get-AllCards", async (query, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/cards', {
            params: { query },
        });
        return response.data;
    } catch (e) {
        console.log("get-AllCards-error", e)
        return rejectWithValue('Failed to fetch data.');

    }

})
export const getCardByIdAsync = createAsyncThunk("/get-ByCardID", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/cards/' + id);
        return response.data;
    } catch (e) {
        console.log("get-ByCardId-error", e)
        return rejectWithValue('Failed to fetch data.');

    }

})
export const addNewCardAsync = createAsyncThunk("/add-NewCard", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:8000/api/v1/cards', formData);
        return response.data;
    } catch (e) {
        console.log("add-NewCard-error", e)
        return rejectWithValue('Failed to add data.');

    }

})