import AddNewButton from "../components/AddNewButton"


const Coupons = () => {
    return (
        <>
            <div className='w-full h-full px-8 pt-8'>
                <p className='uppercase font-semibold text-xl'>Coupons</p>
                <AddNewButton text="Add Coupon" />
            </div>
        </>
    )
}

export default Coupons
