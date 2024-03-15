import React from 'react'
import { HiStar } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { GoDotFill } from "react-icons/go";

const ProductList = () => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'SL No',
        accessorKey: 'sl_no',
      },
      {
        Header: 'Name',
        accessorKey: 'name',
      },
      {
        Header: 'Price',
        accessorKey: 'price',
      },
      {
        Header: 'Quantity',
        accessorKey: 'quantity',
      },
      {
        Header: 'Brand',
        accessorKey: 'brand',
      },
      {
        Header: 'Category',
        accessorKey: 'category',
      },
      {
        Header: 'Sold',
        accessorKey: 'sold',
      },
      {
        Header: 'Rating',
        accessorKey: 'rating',
        Cell: ({ value }) => (
          <div className="flex items-center">
            <HiStar className="text-yellow-500 shadow-sm text-lg inline-block" />
            <span className="ml-1">{value}</span>
          </div>
        ),
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
        name: 'John Brown',
        price: '4500',
        quantity: 35,
        brand: 'Apple',
        category: 'Mobiles',
        sold: 2,
        rating: 3.6,
        action: '',
      },
      {
        sl_no: 1,
        name: 'John Brown',
        price: '4500',
        quantity: 35,
        brand: 'Apple',
        category: 'Mobiles',
        sold: 2,
        rating: 3.6,
        action: '',
      },
      {
        sl_no: 1,
        name: 'John Brown',
        price: '4500',
        quantity: 35,
        brand: 'Apple',
        category: 'Mobiles',
        sold: 2,
        rating: 3.6,
        action: '',
      },
    ],
    []
  );


  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })


  return (
    <>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Products</p>

        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">

              {/* <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">sl no</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">price</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">quantity</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">brand</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">category</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">sold</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">rating</th>
                      <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">&#8377; 4500</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">35</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Apple</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Mobiles</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 flex items-center"><HiStar className='text-yellow-500 shadow-sm text-lg inline-block' />
                        <span className='ml-1'>3.6</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium ">
                        <div className='w-full justify-start'>
                          <MdDelete className='inline-block text-lg mx-1 text-red-600 hover:cursor-pointer' />
                          <TbEdit className='inline-block text-lg mx-1 text-green-600 hover:cursor-pointer' />
                        </div>

                      </td>
                    </tr>


                  </tbody>
                </table>
              </div> */}

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
                                case "price":
                                  return (
                                    <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                      <span className='font-bold'>&#8377;</span>{flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                  );
                                case "action":
                                  return (
                                    <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                      <div className="w-full justify-start">
                                        <MdDelete className="inline-block text-lg mx-1 text-red-600 hover:cursor-pointer" />
                                        <TbEdit className="inline-block text-lg mx-1 text-green-600 hover:cursor-pointer" />
                                      </div>
                                    </td>
                                  );
                                case "rating":
                                  return (
                                    <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                      <HiStar className='text-yellow-500 shadow-sm text-lg inline-block' />
                                      <span className='ml-1'>3.6</span>
                                    </td>
                                  );
                                case "category":
                                  return (
                                    <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">

                                      <span className='bg-green-200 shadow-sm border-green-900 text-xs font-semibold px-2 py-[0.5px] rounded-xl flex items-center w-min justify-center'>
                                        <GoDotFill className='text-green-900 inline-block text-lg' />
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
      </div>
    </>
  )
}

export default ProductList
