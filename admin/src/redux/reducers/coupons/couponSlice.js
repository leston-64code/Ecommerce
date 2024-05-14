import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    coupons: [],
    isLoaded: false
}

export const couponSlice = createSlice({
    name: 'coupons',
    initialState,
    reducers: {
        addCoupon: (state, action) => {
            state.coupons.push(action.payload)
        },
        updateCoupon: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload.id)
            if (index !== -1) {
                state.coupons[index] = action.payload
            }
        },
        deleteCoupon: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload)
            if (index !== -1) {
                state.coupons.splice(index, 1)
            }
        },
        getAllCoupons: (state) => {
            return state.coupons
        },
        setCoupons: (state, action) => {
            state.coupons = action.payload;
        },
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCoupon, deleteCoupon, updateCoupon, getAllCoupons, setCoupons, setIsLoaded } = couponSlice.actions

export default couponSlice.reducer