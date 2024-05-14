import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    blogs:[]
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.push(action.payload)
        },
        updateBlog: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload.id)
            if (index !== -1) {
                state[index] = action.payload
            }
        },
        deleteBlog: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
        getAllBlogs: (state) => {
            return state
        },
        getOneBlog: (state, action) => {
            return state.find(blog => blog.id === action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addBlog, updateBlog, deleteBlog, getAllBlogs, getOneBlog } = blogSlice.actions

export default blogSlice.reducer