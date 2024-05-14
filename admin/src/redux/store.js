import { configureStore } from '@reduxjs/toolkit'
import blogCategorySlice from './reducers/blogCategorySlice'
import productCategorySlice from './reducers/product/productCategorySlice'
import brandSlice from './reducers/brand/brandSlice'

export const store = configureStore({
    reducer: {
        blogCategory:blogCategorySlice,
        productCategory:productCategorySlice,
        brands:brandSlice,
    },
})