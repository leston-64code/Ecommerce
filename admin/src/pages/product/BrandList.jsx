import React, { useEffect, useState } from 'react'
import ContentLoader from '../contentLoader/ContentLoader'
import Error from '../components/Error'
import { useDispatch, useSelector } from 'react-redux';
import useAxiosGet from '../../hooks/useAxiosGet';
import { setBrands, setIsLoaded } from '../../redux/reducers/brand/brandSlice';
import { Menu, MenuItem, MenuButton, MenuDivider } from '@szhsin/react-menu';
import { IoSettingsSharp } from "react-icons/io5";
import EditModal from './components/EditModal';
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import SearchField from 'react-search-field';
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FiMinusCircle } from "react-icons/fi";
import Pagination from '../components/pagination component/Pagination';
// import Menu, { SubMenu, MenuItem } from 'rc-menu';

const BrandList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [listStyle, setListStyle] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const [showCreatedBefore, setShowCreatedBefore] = useState(false)
  const [showCreatedAfter, setShowCreatedAfter] = useState(false)

  const [pageStats, setPageStats] = useState(null)
  const [searchInput, setSearchInput] = useState("")
  const [createdBefore, setCreatedBefore] = useState("")
  const [createdAfter, setCreatedAfter] = useState("")
  const [range, setRange] = useState("")
  const [sort, setSort] = useState("")

  let params = {
    filter: {},
    range: {},
    sort: {},
    page: 1
  }

  if (searchInput) {
    params.filter["title"] = searchInput.trim().toLowerCase()
  }
  if (createdAfter) {
    params.filter["createdAt_gte"] = createdAfter
  }
  if (createdBefore) {
    params.filter["createdAt_lte"] = createdBefore
  }

  if (range) {
    params.range = range
  } else {
    params.range = [0, 2]
  }

  if (sort) {
    params.sort = sort
  }

  const { brands, isLoaded } = useSelector(state => state.brands);
  const { loading, getData } = useAxiosGet();

  function onPageChange(page) {
    params.page = page
    fetchBrands()
  }

  async function fetchBrands() {
    const response = await getData('/api/brand/getallbrands', params);
    if (response?.success === true) {
      setPageStats(response?.pageStats)
      dispatch(setBrands(response?.brands));
      dispatch(setIsLoaded(true));
    }
  }

  function clearFilters() {
    setShowCreatedAfter(false)
    setShowCreatedBefore(false)
  }

  useEffect(() => {
    if (!isLoaded) {
      fetchBrands()
    }
  }, [])

  useEffect(() => {
    fetchBrands()
  }, [createdAfter, createdBefore, sort, range])

  if (loading) {
    return <ContentLoader />
  }
  return (
    <>
      <EditModal openModal={openModal} setOpenModal={setOpenModal} />

      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Brands</p>

        <div className='flex md:flex-row justify-between flex-col my-5'>
          <div className='order-2 md:order-1 space-x-3'>
            {/* <SearchField
              placeholder='Search item'
            // onChange={onChange}
            /> */}
            <form className="relative max-w-sm mx-auto inline-block" onSubmit={(e) => {
              e.preventDefault()
              fetchBrands()
            }}>
              <input className="w-full py-1 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="search" placeholder="Search" value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} />
              <button type='submit' className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <IoIosSearch />
              </button>
            </form>

            {
              showCreatedBefore ?
                <div className='inline-block' data-tooltip-id="created-before" >
                  <div className='flex flex-row items-center space-x-2'>
                    <input type='date' value={createdBefore} onChange={(e) => { setCreatedBefore(e.target.value) }} />
                    <FiMinusCircle className='text-red-500 hover:cursor-pointer text-xl' onClick={() => { setShowCreatedBefore(false); setCreatedBefore("") }} />
                  </div>
                  <ReactTooltip
                    id="created-before"
                    place="bottom"
                    content="Created Before"
                  />
                </div>
                : null
            }

            {
              showCreatedAfter ?
                <div className='inline-block' data-tooltip-id="created-after" >
                  <div className='flex flex-row items-center space-x-2'>
                    <input type='date' value={createdAfter} onChange={(e) => { setCreatedAfter(e.target.value) }} />
                    <FiMinusCircle className='text-red-500 hover:cursor-pointer text-xl' onClick={() => { setShowCreatedAfter(false); setCreatedAfter("") }} />
                  </div>
                  <ReactTooltip
                    id="created-after"
                    place="bottom"
                    content="Created After"
                  />
                </div>
                : null
            }

          </div>

          <div className='flex items-center justify-end space-x-3 order-1 md:order-2 mb-3 md:mb-0'>

            <Menu menuButton={<MenuButton className="flex flex-row items-center space-x-1 text-blue-800 text-xl"><IoFilter className='text-xl inline-block' /><span className='uppercase text-sm font-semibold'>Add Filter</span></MenuButton>} transition>
              <MenuItem onClick={(e) => {
                e.stopPropagation = true;
                setShowCreatedBefore(!showCreatedBefore)
              }}>Created Before</MenuItem>
              <MenuItem onClick={(e) => {
                e.stopPropagation = true;
                setShowCreatedAfter(!showCreatedAfter)
              }}>Created After</MenuItem>
              <MenuDivider />
              <MenuItem onClick={(e) => {
                e.stopPropagation = true;
                clearFilters()
              }}>Clear Filters</MenuItem>
            </Menu>

            <div className='flex items-center text-green-600 space-x-1 hover:cursor-pointer px-2 py-1 hover:border-green-600 hover:rounded-md hover:shadow-md' onClick={() => {
              navigate("/admin/addbrand")
            }}>
              <FiPlusCircle className='inline-block text-xl' />
              <span className='uppercase text-sm font-semibold'>Create</span>
            </div>

            <Menu menuButton={<MenuButton className="flex flex-row items-center space-x-1 text-blue-800 text-xl"><IoSettingsSharp /></MenuButton>} transition>
              <MenuItem onClick={(e) => {
                e.stopPropagation = true;
                setListStyle(!listStyle)
              }}>{listStyle ? "Decompress List" : "Compress List"}</MenuItem>
            </Menu>


          </div>
        </div>


        {/* <AddNewButton text="Add brand" /> */}
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sl no
                </th>
                <th scope="col" className="px-6 py-3">
                  Brand name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                brands?.map((ele, index) => {
                  return <tr className="bg-white border hover:bg-gray-50" key={index}>
                    <th scope="row" className={`px-6 py-${listStyle ? "2" : "4"} font-medium text-gray-900 whitespace-nowrap`}>
                      {index + 1}
                    </th>
                    <th scope="row" className={`px-6 py-${listStyle ? "2" : "4"} font-medium text-gray-900 whitespace-nowrap`}>
                      {ele?.title?.toUpperCase()}
                    </th>
                    <th scope="row" className={`px-6 py-${listStyle ? "2" : "4"} font-medium text-gray-900 whitespace-nowrap`}>
                      <button className="font-medium text-blue-600 hover:underline"
                        onClick={(e) => { setOpenModal(true) }}
                      >Edit</button>
                    </th>
                  </tr>
                })
              }

            </tbody>
          </table>

        </div>

        <div className='flex flex-row items-center mt-5'>
        <Pagination onPageChange={onPageChange} pageStats={pageStats} />
        {/* <Menu menuButton={<MenuButton className="flex flex-row items-center space-x-1 text-blue-800 text-xl"><IoFilter className='text-xl inline-block' /><span className='uppercase text-sm font-semibold'>Results Per Page</span></MenuButton>} transition>
          <MenuItem onClick={(e) => {
            e.stopPropagation = true;
            setShowCreatedBefore(!showCreatedBefore)
          }}>Created Before</MenuItem>
          <MenuItem onClick={(e) => {
            e.stopPropagation = true;
            setShowCreatedAfter(!showCreatedAfter)
          }}>Created After</MenuItem>
          <MenuDivider />
          <MenuItem onClick={(e) => {
            e.stopPropagation = true;
            clearFilters()
          }}>Default</MenuItem>
        </Menu> */}
        </div>
      </div>
    </>
  )
}

export default BrandList
