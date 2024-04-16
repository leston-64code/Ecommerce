import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { MdDelete } from "react-icons/md";
import { Reorder } from 'framer-motion'
const AddProduct = () => {

  const [previewFiles, setPreviewFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the accepted files (images)
    console.log(acceptedFiles);

    // Update state to store the preview URLs of accepted files
    const previews = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    console.log(previews)
    setPreviewFiles(previews);

  }, []);

  const formatFileSize = (size) => {
    const kilobytes = size / 1024;
    if (kilobytes < 1024) {
      return kilobytes.toFixed(2) + ' KB';
    } else {
      const megabytes = kilobytes / 1024;
      return megabytes.toFixed(2) + ' MB';
    }
  };

  function removeImage(name) {
    let newarray = previewFiles.filter((ele, index) => {
      return ele.name !== name
    })
    setPreviewFiles(newarray)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] }, multiple: true });

  return (
    <>
      <div className='w-full h-full px-8 pt-8 overflow-auto'>
        <p className='uppercase font-semibold text-xl'>Add Product</p>

        <div className='w-full flex-1'>

          {/* <htmlForm> */}
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="productname" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                      <input type="text" name="productname" id="productname" autoComplete='off' className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter product name" />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                  <div className="mt-2">
                    <textarea id="description" name="description" autoComplete='off' rows="3" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter product description'></textarea>
                  </div>

                </div>

                {/* Image uploading */}
                <div className="col-span-full">
                  <p className="block text-sm font-medium leading-6 text-gray-900">Upload Product Images</p>
                  <div {...getRootProps()} className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <input {...getInputProps()} />
                    <div className="text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          {/* <input id="file-upload" name="file-upload" type="file" className="sr-only" /> */}
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>

                {/*  Image Previewing */}
               {
                previewFiles.length!==0 ?
                <div className="col-span-full mt-6">
                <p className="block text-sm font-medium leading-6 text-gray-900">Preview Images</p>


                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Order
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Size
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody className='w-[100%]'>
                      <Reorder.Group values={previewFiles} onReorder={setPreviewFiles} style={{ "width": "100%" }}>
                        {previewFiles.map((file, index) => {

                          return <Reorder.Item value={file} key={file.name} className='w-[100%]'>
                            <div className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 w-[100%]" key={index} >
                              <td className="px-6 py-4">
                                {index + 1}
                              </td>
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {file?.name}
                              </th>
                              <td className="px-6 py-4">
                                {formatFileSize(file?.size)}
                              </td>
                              <td className="px-6 py-4">
                                <img src={file.preview} alt={`Preview ${index + 1}`} className="h-10 w-10 object-cover rounded-md" />
                              </td>
                              <td className="px-6 py-4">
                                <MdDelete className='text-2xl text-red-500 hover:text-red-400 hover:cursor-pointer hover:shadow-lg rounded-lg ' onClick={() => {
                                  removeImage(file?.name)
                                }} />
                              </td>
                            </div>
                          </Reorder.Item>
                        }

                        )}
                      </Reorder.Group>


                    </tbody>
                  </table>
                </div>


              </div>: null
               }

              </div>

            </div>

            {/* Brand, Category and Price */}
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="sm:col-span-2">
                  <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">Brand</label>
                  <div className="mt-2">
                    <select id="brand" name="brand" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                  <div className="mt-2">
                    <select id="category" name="category" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                  <div className="mt-2">
                    <input type="number" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter price' />
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Clear</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Product</button>
          </div>

          {/* </htmlForm> */}
        </div >

      </div >
    </>
  )
}

export default AddProduct
