import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    invoices: [],
    isLoaded: false
}

export const invoiceSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {
        addInvoice: (state, action) => {
            state.invoices.push(action.payload)
        },
        updateInvoice: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload.id)
            if (index !== -1) {
                state.invoices[index] = action.payload
            }
        },
        deleteInvoice: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload)
            if (index !== -1) {
                state.invoices.splice(index, 1)
            }
        },
        getAllInvoices: (state) => {
            return state.invoices
        },
        setInvoices: (state, action) => {
            state.invoices = action.payload;
        },
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addInvoice, updateInvoice, deleteInvoice, getAllInvoices, setInvoices, setIsLoaded } = invoiceSlice.actions

export default invoiceSlice.reducer