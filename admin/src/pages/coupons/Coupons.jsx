import { useEffect, useState } from "react"
import AddCoupon from "./AddCoupon.jsx"
import { IoMdAddCircle } from "react-icons/io"
import ContentLoader from "../contentLoader/ContentLoader.jsx"
import { setCoupons, setIsLoaded } from "../../redux/reducers/coupons/couponSlice.js"
import { useDispatch, useSelector } from "react-redux"
import useAxiosGet from "../../hooks/useAxiosGet.js"
import randomColor from "randomcolor"
import { convertToDateOnly } from "../../helpers/dateConverter.js"



const Coupons = () => {

    const [openModal, setOpenModal] = useState(false)

    const dispatch = useDispatch();
    const { coupons, isLoaded } = useSelector(state => state.coupons);
    const { loading, getData } = useAxiosGet();

    async function fetchBrands() {
        const response = await getData('/api/coupon/getallcoupons');
        if (response?.success === true) {
            dispatch(setCoupons(response?.coupons));
            dispatch(setIsLoaded(true));
        }
    }

    useEffect(() => {
        if (!isLoaded) {
            fetchBrands()
        }
    }, [])

    if (loading) {
        return <ContentLoader />
    }

    return (
        <>
            <div className='w-full h-full px-8 pt-8'>
                <p className='uppercase font-semibold text-xl'>Coupons</p>

                {
                    openModal === false ?
                        <>
                            <div className="absolute top-12 right-10 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg hover:cursor-pointer" onClick={() => {
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
                                                Sl no
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Coupon name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Start Date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Expiry Date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Remaining Redeems
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            coupons?.map((ele, index) => {
                                                return <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {index + 1}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap" style={{color:randomColor({luminosity: 'dark'})}}>
                                                        {ele?.name}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {convertToDateOnly(ele?.startDate)}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {convertToDateOnly(ele?.expiryDate)}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {ele?.remaining_redeems}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <a href="" className="font-medium text-blue-600 hover:underline">Edit</a>
                                                    </th>

                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </>

                        :
                        <div className="relative overflow-x-auto w-full mt-3 flex justify-center items-center">
                            <AddCoupon setOpenModal={setOpenModal} />
                        </div >

                }



            </div>
        </>
    )
}

export default Coupons
