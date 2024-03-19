import { IoMdAddCircle } from "react-icons/io";

const AddNewButton = ({ text }) => {

    return (
        <>
            <div className="w-full relative h-[10px] bg-red-400">
                <div type="button" className="absolute top-0 right-10 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg">
                    {text}
                    <IoMdAddCircle />
                </div>
            </div>
        </>
    )
}

export default AddNewButton
