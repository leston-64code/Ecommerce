import React, { useState } from 'react'
import BlogCard from './components/BlogCard'
import { CiViewList } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { MdDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { GoDotFill } from 'react-icons/go';


const BlogList = () => {

  const [view, setView] = useState(false)

  const columns = React.useMemo(
    () => [
      {
        Header: 'SL No',
        accessorKey: 'sl_no',
      },
      {
        Header: 'Title',
        accessorKey: 'title',
      },
      {
        Header: 'Category',
        accessorKey: 'category',
      },
      {
        Header: 'Views',
        accessorKey: 'numOfViews',
      },
      {
        Header: 'Likes',
        accessorKey: 'likes',
      },
      {
        Header: 'Dislikes',
        accessorKey: 'dislikes',
      },
      {
        Header: 'Author',
        accessorKey: 'author',
      },
      {
        Header: 'Action',
        accessorKey: 'action',
        Cell: () => (
          <div className="flex justify-end">
            <MdDelete className="inline-block text-lg mx-1 text-red-600 hover:cursor-pointer" />
            <TbEdit className="inline-block text-lg mx-1 text-green-600 hover:cursor-pointer" />
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        sl_no: 1,
        title: 'Advent of ai and its effects',
        category: 'Mobiles',
        numOfViews: 35,
        likes: 46,
        dislikes: 12,
        author:"admin",
        action: '',
      },
    ],
    []
  );

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <>
      <div className='w-full h-full px-8 pt-8 overflow-auto'>
        <p className='uppercase font-semibold text-xl'>Blogs</p>
        <div className='w-full flex justify-end'>
          <div className='flex flex-row w-fit rounded-lg shadow-lg'>
            <div className={`px-4 py-2 hover:cursor-pointer hover:bg-gray-200 rounded-l-lg ${view===false ? "bg-gray-200":""}`} data-tooltip-id="my-tooltip-1" onClick={()=>{setView(false)}}><CiViewList /></div>
            <div className={`px-4 py-2 hover:cursor-pointer hover:bg-gray-200 rounded-r-lg ${view===true ? "bg-gray-200":""}`} data-tooltip-id="my-tooltip-2" onClick={()=>{setView(true)}}><RxDashboard /></div>
            <ReactTooltip
              id="my-tooltip-1"
              place="bottom"
              content="List View"
            />
            <ReactTooltip
              id="my-tooltip-2"
              place="bottom"
              content="Tile View"
            />
          </div>
        </div>

        {
          view === true ?
            <div className='w-full h-full flex flex-row flex-wrap space-x-4 space-y-14 justify-evenly'>

              {
                [...new Array(30)].map((ele, index) => {
                  if (index === 0) {
                    return <BlogCard key={index} addstyles="mt-14 mx-4" />
                  } else {
                    return <BlogCard key={index} addstyles="" />
                  }
                })
              }

            </div>
            :
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">

                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                          <tr key={headerGroup.id} >
                            {headerGroup.headers.map((header) => (
                              <th
                                key={header.id}
                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                              >
                                {

                                  flexRender(header.column.columnDef.header, header.getContext())
                                }
                              </th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody>
                        {
                          table.getCoreRowModel().rows.map((row) => {
                            return <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800"
                              key={row.id}
                            >

                              {
                                row.getVisibleCells().map((cell) => {
                                  switch (cell.column.id) {
                                  
                                    case "action":
                                      return (
                                        <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                          <div className="w-full justify-start">
                                            <MdDelete className="inline-block text-lg mx-1 text-red-600 hover:cursor-pointer" />
                                            <TbEdit className="inline-block text-lg mx-1 text-green-600 hover:cursor-pointer" />
                                          </div>
                                        </td>
                                      );
                                    
                                    case "category":
                                      return (
                                        <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">

                                          <span className='bg-green-200 shadow-sm border-green-900 text-xs font-semibold px-2 py-[0.5px] rounded-xl flex items-center w-min justify-center'>
                                            <GoDotFill className='text-green-900 inline-block text-md' />
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                          </span>
                                        </td>
                                      );
                                    default:
                                      return (
                                        <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                      );
                                  }
                                })
                              }

                            </tr>
                          })
                        }
                      </tbody>
                      {/* <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr
                          {...row.getRowProps()}
                          className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800"
                        >
                          {row.cells.map((cell) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                              >
                                {cell.render('Cell')}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody> */}
                    </table>
                  </div>

                </div>
              </div>
            </div>
        }

      </div>
    </>
  )
}

export default BlogList
