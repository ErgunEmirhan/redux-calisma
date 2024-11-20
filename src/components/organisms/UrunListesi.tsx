import React, {useEffect, useState} from 'react'
import UrunCard from '../molecules/UrunCard'
import { IProduct } from '../../models/IProduct';
import { fetchGetAllProducts} from '../../store/feature/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDispatch, useAppSelector } from '../../store';


function UrunListesi() {
  const dispatch = useDispatch<ProductDispatch>()
  const liste = useAppSelector(gState=> gState.product.productList)
  useEffect(()=>{
    dispatch(fetchGetAllProducts())

  }, [])
  const isLoading = useAppSelector(gState=> gState.product.isProductListLoading)
  return (
    <div className="col p-3 rounded-3 mt-4" style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.46)'}}>
      <label htmlFor="" className="form-label">Ürün Listesi</label>
      <div className="row">
        {
          isLoading ? <label className='form-label'>yükleniyor</label>: null
        }
        {
          liste?.map((urun, index)=>{
            return <UrunCard key={index} urun={urun}/>
          })
        }
      </div>
    </div>
  )
}

export default UrunListesi