import { useState } from "react"
import AddCoupon from "./AddCoupon.jsx"
import { IoMdAddCircle } from "react-icons/io"
import useGetData from "../../hooks/useGetData.js"
import ContentLoader from "../contentLoader/ContentLoader.jsx"
import Error from "../components/Error.jsx"


const Coupons = () => {

    const [openModal, setOpenModal] = useState(false)

    const { data, isLoading, error } = useGetData("coupons", "/coupon/getallcoupons")

    if (isLoading) {
        return <ContentLoader />
    }

    if (error) {
        return <Error />
    }

    return (
        <>
            <div className='w-full h-full px-8 pt-8'>
                <p className='uppercase font-semibold text-xl'>Coupons</p>
                {/* <div className="relative"> */}
                {
                    openModal === false ?
                        <>
                            <div className="absolute top-12 right-10 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg" onClick={() => {
                                setOpenModal(true)
                            }}>
                                Add Coupon
                                <IoMdAddCircle />
                            </div>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Category name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b hover:bg-gray-50">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                Apple MacBook Pro 17"
                                            </th>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <a href="" className="font-medium text-blue-600 hover:underline">Edit</a>
                                            </th>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </>

                        :
                        <AddCoupon setOpenModal={setOpenModal} />
                }
                {/* </div> */}


            </div>
        </>
    )
}

export default Coupons
