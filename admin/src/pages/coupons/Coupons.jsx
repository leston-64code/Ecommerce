import { useState } from "react"
import AddCoupon from "./AddCoupon.jsx"
import { IoMdAddCircle } from "react-icons/io"


const Coupons = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <div className='w-full h-full px-8 pt-8'>
                <p className='uppercase font-semibold text-xl'>Coupons</p>
                <div className="relative">
                    {
                        openModal === false ?
                            <div className="absolute top-0 right-10 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg" onClick={() => {
                                setOpenModal(true)
                            }}>
                                Add Coupon
                                <IoMdAddCircle />
                            </div>
                            :
                            <AddCoupon setOpenModal={setOpenModal} />
                    }
                </div>
            </div>
        </>
    )
}

export default Coupons
