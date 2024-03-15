import AddNewButton from '../components/AddNewButton'

const AddBlogCategory = () => {
  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Add Blog category</p>
        <AddNewButton text={`Add blog category`}/>
      </div>
    </>
  )
}

export default AddBlogCategory
