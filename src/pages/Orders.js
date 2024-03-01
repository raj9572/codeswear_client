import React from 'react'

const Orders = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-2 p-4'>
        <h1 className='text-2xl text-black font-medium '>Order details</h1>
          <div className='border-2 border-pink-600 w-24'></div>
        <table class="border-collapse border border-slate-500  w-full md:mt-4">
          <thead className='p-2 text-xl text-pink-600 '>
            <tr>
              <th class="border border-slate-600 ...">items-ordered</th>
              <th class="border border-slate-600 ...">Address</th>
              <th class="border border-slate-600 ...">Order-details</th>
            </tr>
          </thead>
          <tbody className=''>
            <tr className='text-lg font-medium text-gray-600' >
              <td class="border border-slate-700 p-4">
                   <p>item1</p> 
                   <p>item1</p> 
              </td>
              <td class="border border-slate-700 p-4">Indianapolis</td>
              <td class="border border-slate-700 p-4">Indianapolis</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Orders
