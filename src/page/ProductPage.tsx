import React, { useState } from 'react'
import UrunArama from '../components/molecules/UrunArama'
import UrunListesi from '../components/organisms/UrunListesi'
import Sepet from '../components/organisms/Sepet'
import { IProduct } from '../models/IProduct'

function ProductPage() {
    const [sepetList, setSepetList] = useState<IProduct[]>([])
    const ahmetAbi = (urun: IProduct) =>{
        setSepetList([...sepetList, urun])
    }
  return (
    <div className='container'>
        <div className="row mt-4">
            <div className="col-8">
                <div className="row">
                    <UrunArama/>
                </div>
                <div className="row">
                    <UrunListesi/>
                </div>
            </div>
            <div className="col-4">
                <Sepet/>
            </div>
        </div>
    </div>
  )
}

export default ProductPage