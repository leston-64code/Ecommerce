import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    isLoaded: false
}

export const blogCategorySlice = createSlice({
    name: 'blogCategory',
    initialState,
    reducers: {
        addBlogCategory: (state, action) => {
            state.categories.push(action.payload)
        },
        updateBlogCategory: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload.id)
            if (index !== -1) {
                state.categories[index] = action.payload
            }
        },
        deleteBlogCategory: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload)
            if (index !== -1) {
                state.categories.splice(index, 1)
            }
        },
        getAllBlogCategories: (state) => {
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
export const { addBlogCategory, updateBlogCategory, deleteBlogCategory, getAllBlogCategories, setCategories, setIsLoaded } = blogCategorySlice.actions

export default blogCategorySlice.reducer