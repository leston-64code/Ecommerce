import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    brands: [],
    isLoaded: false
}

export const brandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        addBrand: (state, action) => {
            state.brands.push(action.payload)
        },
        updateBrand: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload.id)
            if (index !== -1) {
                state.brands[index] = action.payload
            }
        },
        deleteBrand: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload)
            if (index !== -1) {
                state.brands.splice(index, 1)
            }
        },
        getAllBrands: (state) => {
            return state.brands
        },
        setBrands: (state, action) => {
            state.brands = action.payload;
        },
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addBrand, updateBrand, deleteBrand, getAllBrands, setBrands, setIsLoaded } = brandSlice.actions

export default brandSlice.reducer