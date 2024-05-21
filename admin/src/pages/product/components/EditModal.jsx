import React, { useEffect } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";

const EditModal = ({ openModal, setOpenModal }) => {
    // Function to handle click outside the modal
    const handleClickOutside = (event) => {
        if (event.target.id === 'outer-modal') {
            setOpenModal(false);
        }
    };

    // Attach event listener to the outer div
    useEffect(() => {
        if (openModal) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openModal]);

    return (
        <>
            {openModal ? (
                <div
                    id="outer-modal"
                    className="absolute z-10 bg-gray-600 bg-opacity-80 w-full h-full flex justify-center items-center"
                >
                    <div className="md:w-[35%] w-[98%] shadow-lg px-6 py-4 border-gray-200 border-[1px] rounded-xl bg-white">
                        <div className="flex flex-row items-center justify-between mb-5">
                            <p className="text-2xl flex flex-row items-center">Add Brand</p>
                            <IoCloseCircleOutline className='text-2xl hover:cursor-pointer hover:text-red-600' onClick={() => { setOpenModal(false) }} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium">
                                Enter brand name
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                                // value={brandName}
                                onChange={(e) => {
                                    // setBrandName(e.target.value)
                                }}
                            />
                        </div>
                        <div className="mb-5">
                            <button
                                className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white shadow-md hover:shadow-lg"
                                onClick={() => {
                                    // handleSubmit()
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default EditModal;
