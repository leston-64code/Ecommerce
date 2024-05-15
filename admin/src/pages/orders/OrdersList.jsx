import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react'
import { GoDotFill } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';

const OrdersList = () => {

  const columns = React.useMemo(
    () => [
      {
        header: 'SL No',
        accessorKey: 'sl_no',
      },
      {
        header: 'Ord Date',
        accessorKey: 'ord_date',
      },
      {
        header: 'Status',
        accessorKey: 'status',
      },
      {
        header: 'Total Amount',
        accessorKey: 'total_amount',
      },
      {
        header: 'Products Count',
        accessorKey: 'count',
      },
      {
        header: 'Action',
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
        ord_date: '12/03/2024',
        status: 'not processed',
        total_amount: 56470,
        count: 2,
        action: '',
      },
      {
        sl_no: 2,
        ord_date: '12/03/2024',
        status: 'delivered',
        total_amount: 56470,
        count: 2,
        action: '',
      },
      {
        sl_no: 3,
        ord_date: '12/03/2024',
        status: 'processing',
        total_amount: 56470,
        count: 2,
        action: '',
      },
      {
        sl_no: 4,
        ord_date: '12/03/2024',
        status: 'cancelled',
        total_amount: 56470,
        count: 2,
        action: '',
      },
      {
        sl_no: 5,
        ord_date: '12/03/2024',
        status: 'dispatched',
        total_amount: 56470,
        count: 2,
        action: '',
      },

    ],
    []
  );


  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <div>
      <div className='w-full h-full px-8 pt-8'>
        <p className='uppercase font-semibold text-xl'>Orders</p>
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
                                case "total_amount":
                                  return (
                                    <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 font-semibold">
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

                                case "status":
                                  const statusValue = flexRender(cell.column.columnDef.cell, cell.getContext()).props.row.original.status;
                                  // console.log(statusValue.props.row.original.status)
                                  let statusColorClass = '';
                                  let circleColor = '';

                                  switch (statusValue) {
                                    case 'not processed':
                                      statusColorClass = 'bg-yellow-200 border-yellow-900';
                                      circleColor = 'text-yellow-900'
                                      break;
                                    case 'processing':
                                      statusColorClass = 'bg-blue-200 border-blue-900';
                                      circleColor = 'text-blue-900'
                                      break;
                                    case 'dispatched':
                                      statusColorClass = 'bg-purple-200 border-purple-900';
                                      circleColor = 'tepurple-900'
                                      break;
                                    case 'cancelled':
                                      statusColorClass = 'bg-red-200 border-red-900';
                                      circleColor = 'text-red-900'
                                      break;
                                    case 'delivered':
                                      statusColorClass = 'bg-green-200 border-green-900';
                                      circleColor = 'text-green-900'
                                      break;
                                    default:
                                      statusColorClass = 'bg-yellow-200 border-yellow-900';
                                      circleColor = 'text-yellow-900'
                                      break
                                  }

                                  return (

                                    <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                      <span className={`${statusColorClass} shadow-sm text-xs font-semibold px-2 py-[0.5px] rounded-xl flex items-center w-min justify-center`}>
                                        <GoDotFill className={`${circleColor} inline-block text-md`} />
                                        {/* {flexRender(cell.column.columnDef.cell, cell.getContext())} */}
                                        {statusValue}
                                      </span>
                                    </td>
                                  );
                                default:
                                  return (
                                    <td key={cell.column.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 font-semibold">
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
    </div>
  )
}

export default OrdersList
