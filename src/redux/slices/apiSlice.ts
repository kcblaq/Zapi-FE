import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { APIResponseType } from "../../types";

const url = ""

interface ApiState {
    apis: APIResponseType[]
    loading: "idle" | "pending" | "fulfilled" | "rejected"
    error?: any
}

const initialState = {
    apis: [],
    loading: "idle",
    error: null
} as ApiState

export const getApis = createAsyncThunk("apis/getApis", async(_, thunkAPI) => {
    try {
        const response = await fetch(`${url}/categories`)
        const data = await response.json()
        return data.data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const apiSlice = createSlice({
    name: "apis",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getApis.pending, (state) => {
            state.loading = "pending"
        }),
        builder.addCase(getApis.fulfilled, (state, { payload }) => {
            state.apis.push(payload)
            state.loading = "fulfilled"
        }),
        builder.addCase(getApis.rejected, (state, { payload }) => {
            state.loading = "rejected"
            state.error = payload
        })
    }
})

export const { clearError } = apiSlice.actions
export default apiSlice.reducer