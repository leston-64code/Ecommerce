import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import katex from "katex";
// import "katex/dist/katex.min.css";
// window.katex = katex;

const AddBlog = () => {

    const [value, setValue] = useState('')
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['blockquote', 'code-block'],
            [{ 'direction': 'rtl' }],
            [{ 'background': [] }, { 'color': [] }],
            ['link'],
            ['formula'],
            ['video'],
            ['image'],
            ['clean'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ],
    };

    async function handleSubmit() {
        console.log(value)
    }

    return (
        <>
            <div className='w-full h-full px-8 pt-8 overflow-auto'>
                <p className='uppercase font-semibold text-xl'>Add Blog</p>
                <div className='lg:w-[70%] w-[90%] m-auto mt-5'>
                    <div>
                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Title</label>
                            <input type="text" id="title" name='title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter title here" required />
                        </div>
                        <div className='mb-6 w-[100%]'>
                            <label htmlFor="blog-category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Category</label>
                            <select name="Blog Category" id="blog-category" className='lg:w-[20%] w-[100%] rounded-md'>
                                <option value="">Electronics</option>
                                <option value="">IT</option>
                                <option value="">Computers</option>
                                <option value="">Smart Phones</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog Content</p>
                            <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { handleSubmit() }}>Submit</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AddBlog
