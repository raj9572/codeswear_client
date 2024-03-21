import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaEdit } from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import { deleteSingleProduct, getAllProduct } from '../../redux/Slice/productSlice'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const products = useSelector(state => state.productReducer.products)

  useEffect(()=>{
     dispatch(getAllProduct())
  },[])


  return (
    <div>
      <table className="w-full border-collapse border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">S/n</th>
            <th className="border border-slate-600 ...">Product Name</th>
            <th className="border border-slate-600 ...">Price</th>
            <th className="border border-slate-600 ...">Category</th>
            <th className="border border-slate-600 ...">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map(product => (
              <tr key={product._id}>
                <td className="border border-slate-700 ...">
                  <img className='w-[100px] h-[100px]' src={product.productImage.url} alt="" />
                </td>
                <td className="border border-slate-700 ...">{product.title}</td>
                <td className="border border-slate-700 ...">
                  {product.price}
                </td>
                <td className="border border-slate-700 ...">{product.category.category}</td>
                <td className="border border-slate-700 ...">
                    <div className='flex gap-2 text-xl justify-center text-pink-600'>
                        <FaEdit onClick={()=>navigate(`/admin/editproduct/${product._id}`)} className='cursor-pointer' />
                      <MdDelete className='cursor-pointer' onClick={()=>dispatch(deleteSingleProduct(product._id))} />
                    </div>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default ProductList
