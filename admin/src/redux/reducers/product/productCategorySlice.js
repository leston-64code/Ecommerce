import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    isLoaded: false
}

export const productCategorySlice = createSlice({
    name: 'productCategory',
    initialState,
    reducers: {
        addProductCategory: (state, action) => {
            state.categories.push(action.payload)
        },
        updateProductCategory: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload.id)
            if (index !== -1) {
                state.categories[index] = action.payload
            }
        },
        deleteProductCategory: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload)
            if (index !== -1) {
                state.categories.splice(index, 1)
            }
        },
        getAllProductCategories: (state) => {
            return state.categories
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProductCategory, updateProductCategory, deleteProductCategory, getAllProductCategories, setCategories, setIsLoaded } = productCategorySlice.actions

export default productCategorySlice.reducer